import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Dairy from '../page/dairy.vue'
import Photo from '../page/photo.vue'
import Login from '../page/login.vue'
import Reg from '../page/reg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/dairy',
      component: Dairy
    },
    {
      path: '/photo',
      component: Photo
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/reg',
      component: Reg
    }
  ]
})
