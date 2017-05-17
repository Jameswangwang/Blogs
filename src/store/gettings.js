// header
export const getToken = state => state.auth.token   // state此时代表着全局的state


// search
export const getArticleList = state => state.articleList
export const getTags = state => state.tags.tags


// header、serch共用
export const getAuth = state => state.auth.info

// set/index
export const getUser = state => state.user

// user/index
export const getArticleUser = state => state.articleUser

// message
export const getmessage = state => state.msg.message
