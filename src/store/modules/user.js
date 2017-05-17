import { USER_INFO, USER_SET, UPDATE_USER, UPDATE_HEADER } from '../types'

const state = {
  own: '',
  info: {
    'id': 111,
    'nickname': '美美',
    'sex': 1,
    'showEmail': 1,
    'articleCount': 500,
    'collectCount': 500,
    'birthdayMonth': 11,
    'photoCount': 200,
    'birthdayDay': 2,
    'blood': 2,
    'summary': '我是个好孩子',
    'friend': {
      'id': '222',
      'header': '',
      'nickname': '我是他们的小白白'
    },
    'url': 'www.baidu.com',
    'email': '21545452@121.com',
    'qqnumber': '250494545',
    'header': '',
    'created': '2017-05-15T11:29:17.534Z'
  }
}

const mutations = {
  [USER_INFO](state, data) {
    state.own = data.own
    state.info = data.info
  },
  [USER_SET](state, data) {
    state.own = data.own
    state.info = data.info
  },
  [UPDATE_USER](state, data) {
    state.info = data.info
  },
  [UPDATE_HEADER](state, data) {
    state.info.header = data.url
  }
}

export default {
  state,
  mutations
}
