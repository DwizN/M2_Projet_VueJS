<template>
    <div class="card mb-3" style="max-width: 540px; margin-left: auto; margin-right:auto">
        <div class="row no-gutters">
            <div class="col-4 col-md-3">
                <img v-if="item.enseigne != ''" :src='"../assets/" + item.enseigne + ".png"'
                    style="width:100%; height:100%">
                <img v-else src="https://fakeimg.pl/200x200/?text=Course List" style="width:100%; height:100%">
            </div>
            <div class="col-7 col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <p class="card-text">{{item.description}}</p>
                    <div class="row">
                        <div class="col-10 pr-0">
                            <i class="el-icon-shopping-cart-2"></i>
                            <!-- Pour le fun, un tooltip pour voir les items de la liste au survol -->
                            <el-tooltip placement="right-end">
                                <div slot="content">
                                    <ul class="pl-2 pb-0" v-for="(itemListe, index) in item.items" :key="index"
                                        style="margin-bottom:0px!important;">
                                        <li>
                                            <span class="pr-3">{{itemListe.quantite}}x</span>
                                            <span class="pr-3">{{itemListe.name}}</span>
                                            <span> {{ itemListe.prix}}€ </span>
                                        </li>
                                    </ul>
                                    <span v-if="item.items.length ===0">Aucun produit dans ce panier</span>
                                </div>
                                <span @click="openList(item.id)" class="articles pl-1">{{item.items.length}}
                                    article(s)</span>
                            </el-tooltip>
                            <span class="pl-1">- {{getPrice}}€</span>
                        </div>
                        <div class="col-2 text-right px-0" style="color: #6c757d">
                            <p class="card-text"><small
                                    class="text-muted">{{item.dateCreation | moment('hh:mm')}}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1 col-md-1 text-center p-0">
                <div @click="openList(item.id)" class="h-50 container" style="background-color:#EEE">
                    <i class="py-3 el-icon-s-promotion" style="font-size:1.4em;"></i>
                </div>
                <div @click="removeFromList(item.id)" class="h-50 text-light container"
                    style="background-color:#F56C6C">
                    <i style="font-size:1.4em;" class="py-3 el-icon-delete"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Liste',
        props: ['item'],

        computed: {
            getPrice() {
                if (this.item.items.length === 0) {
                    return 0
                } else {
                    return parseFloat(this.item.items.reduce((acc, current) => (acc += parseFloat(current.prix)), 0)
                        .toFixed(2))
                }
            }
        },
        methods: {
            removeFromList(id) {
                this.$store.commit('REMOVE_LIST', id)
            },
            openList(id) {
                this.$router.push({
                    name: 'list',
                    params: {
                        id: id
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        cursor: pointer;
    }

    .container:hover {
        opacity: 0.7
    }

    .articles {
        cursor: pointer;
        text-decoration: underline;
    }
</style>