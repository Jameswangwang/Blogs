import { USER_LOGIN, USER_LOGOUT, USER_REG, AUTH_INFO, UPDATE_HEADER } from '../types'

const isLoggedIn = function () {
  const token = localStorage.getItem('user')
  if (token) {

  } else {
    return false
  }
}
const state = {
  token: isLoggedIn() || 'haha',
  id: 123,
  info: {
    'id': 111,
    'header': '/',
    'nickname': '小丸子',
    'articleCount': 11,
    'collectCount': 100,
    'photoCount': 20
  }
}

const mutations = {
  [USER_LOGOUT](state) {
    localStorage.removeItem('user')
    state.token = null
    state.info = null
  },
  [UPDATE_HEADER](state, data) {
    state.info.header = data.url
  }
}

export default {
  state,
  mutations
}
