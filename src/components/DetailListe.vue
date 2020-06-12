<template>
  <div style="max-width: 540px; margin-left: auto; margin-right:auto">
    <div v-if="liste.length !== 0">
      <h1 class="text-center">{{liste.name}}</h1>
      <div class="w-100 text-center">
        <el-button @click.native="openAdd" class="my-3" type="warning" plain>
          Ajouter un article
        </el-button>
      </div>
      <div v-if="liste.items.length === 0" class="text-center">
        <h3><i class="el-icon-warning"></i> Aucun élément dans la liste</h3>
      </div>
      <div v-else>
        <div class="card my-2" v-for="(item, index) in liste.items" :key="index">
          <div class="card-body py-0 pr-0">
            <div class="row">
              <div class="col-2 align-center">
                {{item.quantite}}x
              </div>
              <div class="col-6 text-left">
                {{item.name}}
              </div>
              <div class="col-2 text-right pl-0">
                {{item.prix}}€
              </div>
              <div @click="removeItem(item.id)" class="col-2 align-center text-center"
                style="background-color:#F56C6C;cursor:pointer;">
                <i style="font-size:0.8em; color:white;" class="pt-1 el-icon-delete"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
             <router-link to="/listing">Retour</router-link>
             </div>
         </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailListe',

    data() {
      return {
        liste: []
      }
    },
    mounted() {
      this.liste = this.$store.getters.getListById(this.$route.params.id)
    },
    methods: {
      openAdd() {
        this.$router.push({
          name: 'addItem',
          params: {
            id: this.liste.id
          }
        })
      },
      removeItem(id) {
        let payload = {'listId': this.$route.params.id, 'itemId': id}
        this.$store.commit('REMOVE_ITEM_IN_LIST', payload)
      }
    }
  }
</script>