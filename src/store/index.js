import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './gettings'
import * as actions from './actions'

import auth from './modules/auth'
import articleList from './modules/articleList'
import tags from './modules/tags'
import user from './modules/user'
import articleUser from './modules/articleUser'
import msg from './modules/msg'


Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    articleList,
    tags,
    user,
    articleUser,
    msg
  }
})
