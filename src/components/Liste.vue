<template>
    <div class="card mb-3" style="max-width: 540px; margin-left: auto; margin-right:auto">
        <div class="row no-gutters">
            <div class="col-4 col-md-3">
                <img v-if="item.enseigne != ''" :src='"../assets/" + item.enseigne + ".png"'
                    style="width:100%; height:100%">
                <img v-else src="https://fakeimg.pl/200x200/?text=Course List" style="width:100%; height:100%">
            </div>
            <div class="col-5 col-md-7">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <p class="card-text">{{item.description}}</p>
                    <div class="row">
                        <div class="col-8 col-md-9">
                            <p class="card-text"><small class="text-muted">01/05/2020</small></p>
                        </div>
                        <div class="col-4 col-md-3 text-right pr-0" style="color: #6c757d">
                            0 <i class="el-icon-shopping-cart-2"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 col-md-2 text-center p-3">
                <div class="p-2 d-inline-block">
                    <el-button type="secondary" icon="el-icon-s-promotion" circle></el-button>
                </div>
                <div class="p-2 d-inline-block">
                    <el-button @click="removeFromList(item.id)" type="danger" icon="el-icon-delete" circle></el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Liste',
        props: ['item'],
        data: () => ({

        }),
        methods: {
            removeFromList(id) {
                console.log(id)
                this.$parent.removeFromList(id)
            }
        }
    }
</script>