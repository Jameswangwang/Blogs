import Vue from 'vue'
import Router from 'vue-router'

import Index from '../page/index.vue'
import Dairy from '../page/dairy.vue'
import Photo from '../page/photo.vue'
import Login from '../page/login.vue'
import Reg from '../page/reg.vue'
import user from '../page/user.vue'
import page from '../page/page.vue'
import Set from '../page/set.vue'

import userIndex from '../components/user/index'
import userAlbum from '../components/user/album'
import setIndex from '../components/set/index'
import setPassword from '../components/set/password'
import setFriend from '../components/set/friend'
import userTogether from '../components/user/together'
import userInfo from '../components/user/info'

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
    },
    {
      path: '/set',
      component: Set,
      children: [{
        path: '',
        name: 'setIndex',
        component: setIndex
      },
      {
        path: 'password',
        name: 'setPassword',
        component: setPassword
      },
      {
        path: 'friend',
        name: 'setFriend',
        component: setFriend
      }
      ]
    },
    {
      path: '',
      name: 'page',
      component: page
    },
    {
      path: '/u/:uid',
      component: user,
      children: [{
        path: '',
        name: 'userIndex',
        component: userIndex
      },
      {
        path: 'album',
        name: 'userAlbum',
        component: userAlbum
      },
      {
        path: 'together',
        name: 'userTogether',
        component: userTogether
      },
      {
        path: 'info',
        name: 'userInfo',
        component: userInfo
      }]
    }
  ]
})
