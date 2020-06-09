<template>
    <div>
        <h1 class="text-center">Nouvelle liste</h1>
        <div class="row" style="max-width:600px; margin-left:auto; margin-right:auto;">
            <div class="col-12">
                <el-select class="mb-3 w-100" v-model="form.enseigne" placeholder="Selectionnez une enseigne">
                    <el-option v-for="(item, index) in enseignes" :key="index" :label="item" :value="item">
                    </el-option>
                </el-select>
                <el-input required type="text" class="mb-3" placeholder="Entrez le nom de la liste" v-model="form.name" maxlength="20"
                    show-word-limit><template slot="prepend">Nom :</template></el-input>
                <el-input type="text" placeholder="Entrez une description" v-model="form.description" maxlength="50"
                    show-word-limit><template slot="prepend">Description :</template></el-input>
                    <el-button class="w-100 mt-3" type="warning" @click="addListe">Ajouter</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AddListe',
        data: () => ({
            enseignes: ['Décathlon', 'Auchan', 'Carrefour'],
            form: {
                name: '',
                description: '',
                enseigne: ''
            }
        }),
        methods: {
            addListe() {
                let date = new Date();
                const newList = {
                    id: date.getTime(),
                    name: this.form.name,
                    description: this.form.description,
                    enseigne: this.form.enseigne,
                    dateCreation: date.getTime(),
                    items: []
                }
                if(this.form.name !== ''){
                    this.$store.commit('ADD_LIST', newList)
                    this.$router.push({ name: 'listing'});
                }
            }
        },
    }
</script>

<style scoped>
    .el-input-group__prepend {
        width: 200px !important;
    }
</style>