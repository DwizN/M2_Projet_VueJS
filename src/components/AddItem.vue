<template>
  <div>
    <h1 class="text-center py-2">Ajouter un article à la liste <b> <br>{{liste.name}}</b></h1>
    <div class="row" style="max-width:600px; margin-left:auto; margin-right:auto;">
      <div class="col-12">
        <el-input type="text" class="mb-3" placeholder="Entrez un nom" v-model="form.name" maxlength="30"
          show-word-limit><template slot="prepend">Nom :</template></el-input>
      </div>
      <div class="col-6">
        Quantité: <el-input-number class="mb-3" v-model="form.quantite" :min="0" :max="10000"></el-input-number></div>
        <div class="col-6 text-right">
          Prix: <el-input-number label="prix" sclass="mb-3" :precision="2" v-model="form.prix" :min="0.10"></el-input-number>
        </div>
        <div class="col-12">
      <el-button class="w-100" type="warning" @click="addItem">Ajouter</el-button>
      </div>
            </div>
  </div>
</template>

<script>
  export default {
    name: 'AddItem',
    data() {
      return {
        liste: [],
        form: {
          name: '',
          quantite: 1,
          prix: 1.00


        }
      }
    },
    mounted() {
      this.liste = this.$store.getters.getListById(this.$route.params.id)
    },
    methods: {
      addItem() {
        if(this.form.name === '') { return }
        let date = new Date();
        const newItem = {
          id: date.getTime(),
          name: this.form.name,
          quantite: Number(this.form.quantite),
          prix: parseFloat(this.form.prix).toFixed(2)
        }

        let payload = {
          'newItem': newItem,
          'listId': this.$route.params.id
        }
        this.$store.commit('ADD_ITEM_IN_LIST', payload)
        this.$router.push({
          name: 'listing'
        });
      }
    }
  }
</script>