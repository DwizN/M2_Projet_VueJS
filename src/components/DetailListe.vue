<template>
  <div class=" w-50 m-auto">
    <div v-if="liste.length">
    <h1 class="text-center">{{liste.name}}</h1>
    <div class="w-100 text-center"><el-button @click.native="openAdd" class="my-3" type="warning" plain>
      Ajouter un article
    </el-button></div>
    <div v-if="liste.items.length === 0" class="text-center">
      <h3><i class="el-icon-warning"></i> Aucun élément dans la liste</h3>
      </div>
    <div v-else>
    <div class="card my-1 m-auto" v-for="(item, index) in liste.items" :key="index">
      <div class="card-body py-0 pr-0">
        <div class="row">
          <div class="col-2 align-center">
            {{item.quantite}}x
          </div>
          <div class="col-8 text-left">
            <label>{{item.name}}</label>
          </div>
          <div @click="removeItem(item.id)" class="col-2 align-center text-center" style="background-color:#F56C6C;cursor:pointer;">
            <i style="font-size:1em; color:white;" class="py-2 el-icon-delete"></i>
          </div>
        </div>
      </div>
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
                liste: [],
                listes: []
            }
        },
    created() {
      this.listes = JSON.parse(localStorage.getItem('listes')) || []
    },

    mounted() {
      this.getInfosListe()
    },
    methods: {
      getInfosListe() {
        console.log(this.listes)
        const index = this.listes.findIndex(list => list.id === this.$route.params.id)
        console.log(index)
        this.liste = this.listes[index]
      },

      openAdd() {
                this.$router.push({
                    name: 'addItem',
                    params: {
                        id: this.liste.id
                    }
                })
            },
      removeItem(id) {
        const indexListe = this.listes.findIndex(list => list.id === this.$route.params.id)
        const indexItem = this.liste.items.findIndex(item => item.id === id)
        this.listes[indexListe].items.splice(indexItem, 1)
        localStorage.setItem('listes', JSON.stringify(this.listes))
      }
    }
  }
</script>