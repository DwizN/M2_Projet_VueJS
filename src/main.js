import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import ElementUI from 'element-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/fr'

Vue.use(ElementUI, { locale })
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  router,
  store,

  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  
  render: h => h(App),
}).$mount('#app')
