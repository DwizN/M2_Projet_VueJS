<template>
    <div>
        <center>
            <h1 class="py-4">Liste des courses</h1>
            <router-link to="/new">
                <el-button class="my-3" type="info" plain>
                    Ajouter une liste
                </el-button>
            </router-link>
        </center>
        <div class="listing">
            <h3 class="text-center" v-if="listes.length === 0"><i class="el-icon-warning"></i> Aucune liste créée</h3>
            <div v-for="(item, index) in listes" :key="index" class="row-liste">
                <Liste :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
    import Liste from './Liste.vue'
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: 'Listing',
        components: {
            Liste
        },
        computed: {
            ...mapGetters([
                'listes'
            ])
        }
    }
</script>
<style scoped>
.listing {
    margin-bottom: 80px;
}
</style>