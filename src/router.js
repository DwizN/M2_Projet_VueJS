import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HomePage.vue'
import Listing from './components/Listing.vue'
import AddListe from './components/AddListe.vue'
import DetailList from './components/DetailListe.vue'
import AddItem from './components/AddItem.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/listing',
      name: 'listing',
      component: Listing
    },
    {
      path: '/new',
      name: 'new',
      component: AddListe
    },
    {
      path: '/list/:id',
      name: 'list',
      component: DetailList,
      props: true
    },
    {
      path: '/list/:id/add',
      name: 'addItem',
      component: AddItem,
      props: true
    }
  ]
})