<template>
    <div class="w-50 m-auto">
        <h1 class="text-center py-2">Ajouter un article à la liste {{liste.name}}</h1>
        <el-input type="text" class="mb-3" placeholder="Please input" v-model="form.name" maxlength="20"
                    show-word-limit><template slot="prepend">Nom :</template></el-input>
        <el-input type="number" class="mb-3" placeholder="Please input" v-model="form.quantite" max="20" min="0"
                    show-word-limit><template slot="prepend">Quantité :</template></el-input>
        <el-button class="w-100" type="warning" @click="addItem">Ajouter</el-button>
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
                quantite: ''
            }
            }
        },
    mounted() {
      this.getInfosListe();
    },
    methods: {
      getInfosListe() {
        let listes = JSON.parse(localStorage.getItem('listes')) || []
        const index = listes.findIndex(list => list.id === this.$route.params.id)
        this.liste = listes[index]
      },
      addItem() {
          let date = new Date();
                const newItem = {
                    id: date.getTime(),
                    name: this.form.name,
                    quantite: this.form.quantite,
                }
                let listes = JSON.parse(localStorage.getItem('listes'))
                const index = listes.findIndex(list => list.id === this.$route.params.id)
                console.log(listes[index])
                listes[index].items.push(newItem)
                localStorage.setItem('listes', JSON.stringify(listes))
                this.$router.push({ name: 'listing'});
            }
    }
  }
</script>