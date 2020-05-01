<template>
    <div>
        <center>
            <h1 class="py-4">Liste des courses</h1>
            <router-link to="/new">
                <el-button class="my-3" type="warning" plain>
                    Ajouter une liste
                </el-button>
            </router-link>
        </center>
        <div v-for="(item, index) in listes" :key="index" class="row-liste">
            <Liste :item="item" />
        </div>
    </div>
</template>

<script>
    import Liste from './Liste.vue'
    export default {
        name: 'Listing',
        components: {
            Liste
        },
        data: () => ({
            listes: []
        }),
        mounted() {
            this.listes = JSON.parse(localStorage.getItem('listes')) || []
        },
        methods: {
            removeFromList(id) {
                const index = this.listes.findIndex(list => list.id === id)
                this.listes.splice(index, 1)
            }
        },
        watch: {
            listes: {
                handler() {
                    localStorage.setItem('listes', JSON.stringify(this.listes))
                },
                deep: true
            }
        }
    }
</script>