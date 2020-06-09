<template>
    <div class="card mb-3" style="max-width: 540px; margin-left: auto; margin-right:auto">
        <div class="row no-gutters">
            <div class="col-4 col-md-3">
                <img v-if="item.enseigne != ''" :src='"../assets/" + item.enseigne + ".png"'
                    style="width:100%; height:100%">
                <img v-else src="https://fakeimg.pl/200x200/?text=Course List" style="width:100%; height:100%">
            </div>
            <div class="col-5 col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <p class="card-text">{{item.description}}</p>
                    <div class="row">
                        <div class="col-8 col-md-6">
                            <i class="el-icon-shopping-cart-2"></i> {{item.items.length}} article(s)
                        </div>
                        <div class="col-4 col-md-6 text-right pr-0" style="color: #6c757d">
                            <p class="card-text"><small class="text-muted">{{item.dateCreation | moment('DD/MM/YYYY')}}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 col-md-1 text-center p-0">
                <div @click="openList(item.id)" class="h-50 container" style="background-color:#EEE">
                    <i class="py-3 el-icon-s-promotion" style="font-size:1.4em;"></i>
                </div>
                <div @click="removeFromList(item.id)" class="h-50 text-light container" style="background-color:#F56C6C">
                    <i style="font-size:1.4em;" class="py-3 el-icon-delete"></i>
                </div>
                <!--<div class="p-2 d-inline-block">
                    <el-button @click="openList(item.id)" type="secondary" icon="el-icon-s-promotion" circle></el-button>
                </div>
                <div class="p-2 d-inline-block">
                    <el-button @click="removeFromList(item.id)" type="danger" icon="el-icon-delete" circle></el-button>
                </div>-->
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
                this.$parent.removeFromList(id)
            },
            openList(id) {
                this.$parent.openList(id) 
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
  cursor:pointer;
}
.container:hover {
    opacity: 0.7
}
</style>