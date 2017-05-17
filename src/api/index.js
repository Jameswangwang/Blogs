import axios from 'axios'

function config() {
  const base = {
    baseURL: ROOT
  }
  if (localStorage.getItem('user') && !base.headers) {
    base.headers = { Authorization: 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\\"$)/g, '') }
  }
  return base
}

export default {
  authInfo: function () {
    return 5
    /* return axios.get('user/authInfo', config()) */
  },
  articleList: function (data) {
    return data
  },
  tags: function () {
    return 'tags'
  },
  updatePassword: function (data) {
    return data
    /* return axios.put('/user/updatePassword', data, config()) */
  },
  userInfo: function (data) {
    return data
    /* return axios.get('/user/' + data + '/userInfo', config()) */
  },
  articleUser: function (data) {
    return data
    /* return axios.get('/article/' + data, config()) */
  }
}
