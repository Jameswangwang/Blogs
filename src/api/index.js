import axios from 'axios'

function config() {
  const base = {
    baseURL: ROOT
  }
  if (localStorage.getItem('user') && !base.headers) {
    base.headers = {Authorization: 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\\"$)/g, '')}
  }
  return base
}

export default {
  authInfo: function() {
    return 5
    /* return axios.get('user/authInfo', config()) */
  }
}
