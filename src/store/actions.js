import api from '../api/index'
import * as types from './types'

// header
export const userLogout = ({ commit }) => {
  commit(types.USER_LOGOUT)
}
export const authInfo = ({ commit }) => {
  /* console.log(api.authInfo()) */
}


// search
// 模拟数据
var list = [
  {
    '_id': 1,
    'title': '模拟标题',
    'content': '模拟内容：测试专用测试专用测试专用测试专用测试专用',
    'image': '',
    'created': '2017-05-15T11:29:17.534Z',
    'tag': '博客',
    'pv': '500',
    'commentCount': 20,
    'authId': {
      '_id': 11,
      'nickname': '小花'
    }
  },
  {
    '_id': 2,
    'title': '模拟标题',
    'content': '模拟内容：测试专用测试专用测试专用测试专用测试专用',
    'image': '',
    'created': '2017-05-15T11:29:17.534Z',
    'tag': '博客',
    'pv': '500',
    'commentCount': 20,
    'authId': {
      '_id': 22,
      'nickname': '小花'
    }
  },
  {
    '_id': 3,
    'title': '模拟标题',
    'content': '模拟内容：测试专用测试专用测试专用测试专用测试专用',
    'image': '',
    'created': '2017-05-15T11:29:17.534Z',
    'tag': '博客',
    'pv': '500',
    'commentCount': 20,
    'authId': {
      '_id': 33,
      'nickname': '小花'
    }
  },
  {
    '_id': 2,
    'title': '模拟标题',
    'content': '模拟内容：测试专用测试专用测试专用测试专用测试专用',
    'image': '',
    'created': '2017-05-15T11:29:17.534Z',
    'tag': '博客',
    'pv': '500',
    'commentCount': 20,
    'authId': {
      '_id': 22,
      'nickname': '小花'
    }
  },
  {
    '_id': 2,
    'title': '模拟标题',
    'content': '模拟内容：测试专用测试专用测试专用测试专用测试专用',
    'image': '',
    'created': '2017-05-15T11:29:17.534Z',
    'tag': '博客',
    'pv': '500',
    'commentCount': 20,
    'authId': {
      '_id': 22,
      'nickname': '小花'
    }
  },
  {
    '_id': 2,
    'title': '模拟标题',
    'content': '模拟内容：测试专用测试专用测试专用测试专用测试专用',
    'image': '',
    'created': '2017-05-15T11:29:17.534Z',
    'tag': '博客',
    'pv': '500',
    'commentCount': 20,
    'authId': {
      '_id': 22,
      'nickname': '小花'
    }
  },
  {
    '_id': 2,
    'title': '模拟标题',
    'content': '模拟内容：测试专用测试专用测试专用测试专用测试专用',
    'image': '',
    'created': '2018-05-15T11:29:17.534Z',
    'tag': '博客',
    'pv': '500',
    'commentCount': 20,
    'authId': {
      '_id': 22,
      'nickname': '小花'
    }
  }
]
var info = {
  'id': 111,
  'nickname': '美美',
  'sex': 1,
  'showEmail': 1,
  'birthdayMonth': 11,
  'birthdayDay': 2,
  'blood': 2,
  'summary': '我是个好孩子',
  'url': 'www.baidu.com',
  'qqnumber': '250494545',
  'header': ''
}
var info1 = {
  'id': 111,
  'nickname': '美美11',
  'sex': 1,
  'showEmail': 1,
  'birthdayMonth': 11,
  'birthdayDay': 2,
  'blood': 2,
  'summary': '我是个好孩子11',
  'url': 'www.baidu.com11',
  'qqnumber': '250494545',
  'header': ''
}
export const articleList = ({ commit }, data) => {
  /* console.log(api.articleList(data)) */
  commit(types.ARTICLE_STATUS, { status: 1 })
  commit(types.ARTICLE_LIST, {
    list: list,
    status: 2
  })
  /*
  api.articleList(data).then(function (response) {
    const status = response.data.article.length === 10 ? 0 : 2
    commit(types.ARTICLE_LIST, {
      list: response.data.article,
      status: status
    })
  }).catch(function (error) {
    commit(types.ARTICLE_STATUS, { status: 0 })
    if (error.response) {
      showMsg({ commit }, {
        content: error.response.data.errorMsg || '网络故障',
        type: 'danger'
      })
    }
  }) */
}
export const articleClear = ({ commit }) => {
  commit(types.ARTICLE_CLEAR)
}
export const tags = ({ commit }) => {
  /* console.log(api.tags()) */
  /* api.tags().then(function (response) {
    commit(types.TAGS, {
      tags: response.data.tags
    })
  }).catch(function (error) {
    commit(types.TAGS)
  }) */
}
export const articleTagName = ({ commit }, data) => {
  commit(types.ARTICLE_TAGNAME, {
    tagName: data
  })
}
export const articleKeyword = ({ commit }, data) => {
  commit(types.ARTICLE_KEYWORD, {
    keyword: data
  })
}


// set/index
export const userSet = ({ commit }) => {
  commit(types.USER_SET, {
    own: true,
    info: info
  })
  /* api.userSet().then(function (response) {
    commit(types.USER_SET, {
      own: response.data.own,
      info: response.data.userInfo
    })
  }).catch(function (error) {
    commit(types.USER_SET)
  }) */
}
export const updateUser = ({ commit }, data) => {
  commit(types.UPDATE_USER, {
    info: info1
  })
  /* api.updateUser(data).then(function (response) {
    commit(types.UPDATE_USER, {
      info: response.data.userInfo
    })
    showMsg({ commit }, {
      content: '更新成功',
      type: 'info'
    })
  })
    .catch(function (error) {
      if (error.response) {
        showMsg({ commit }, {
          content: error.response.data.errorMsg || '更新失败',
          type: 'danger'
        })
      }
    }) */
}
export const updateHeader = ({ commit }, data) => {
  commit(types.UPDATE_HEADER, data)
}

// set password
export const updatePassword = ({ commit }, data) => {
  api.updatePassword(data)
  /* api.updatePassword(data).then(function (response) {
    showMsg({ commit }, {
      content: '更新成功',
      type: 'info'
    })
  })
    .catch(function (error) {
      if (error.response) {
        showMsg({ commit }, {
          content: error.response.data.errorMsg || '更新失败',
          type: 'danger'
        })
      }
    }) */
}

// page/user
export const userInfo = ({ commit }, data) => {
  api.userInfo(data)
  /* api.userInfo(data).then(function (response) {
    commit(types.USER_INFO, {
      own: response.data.own,
      info: response.data.userInfo
    })
  })
    .catch(function (error) {
      commit(types.USER_INFO)
    }) */
}

// user/index
export const articleUser = ({ commit }, data) => {
  commit(types.ARTICLE_USER_STATUS, { status: 1 })
  api.articleUser(data)
  setTimeout(function() {
    commit(types.ARTICLE_USER, {
      list: list,
      status: 2
    })
  }, 1000)

  /* api.articleUser(data).then(function (response) {
    const status = response.data.article.length === 10 ? 0 : 2
    commit(types.ARTICLE_USER, {
      list: response.data.article,
      status: status
    })
  })
    .catch(function (error) {
      commit(types.ARTICLE_USER_STATUS, { status: 0 })
      if (error.response) {
        showMsg({ commit }, {
          content: error.response.data.errorMsg || '网络故障',
          type: 'danger'
        })
      }
    }) */
}
export const articleUserClear = ({ commit }) => {
  commit(types.ARTICLE_USER_CLEAR)
}
export const hideMsg = ({ commit }, id) => {
  commit(types.HIDE_MSG, id)
}
