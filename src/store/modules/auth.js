const isLoggedIn = function() {
  const token = localStorage.getItem('user')
  if (token) {

  } else {
    return false
  }
}
const state = {
  token: isLoggedIn() || 'haha',
  info: null
}

export default {
  state
}
