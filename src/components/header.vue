<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="/static/img/logo.png" alt="眼镜日记" width="150" height="50">
        </router-link>
      </div>
      <div class="nav_category" @click="toggleNav">
        <i class="iconfont icon-category"></i>
      </div>
      <div class="nav_mobile" v-show="showNav" @click="toggleNav">
        <ul>
          <li>
            <router-link to="/" class="nav_mobile_a">主页</router-link>
          </li>
          <li>
            <router-link to="/dairy" class="nav_mobile_a">日记</router-link>
          </li>
          <li>
            <router-link to="/photo" class="nav_mobile_a">照片墙</router-link>
          </li>
          <li v-if="!getAuth">
            <router-link to="/login" class="nav_mobile_a">登录</router-link>
          </li>
          <li v-else>
            <router-link :to="{ name: 'userIndex', params: { uid: getAuth.id }}">{{getAuth.nickname}}</router-link>
          </li>
        </ul>
      </div>
      <div class="nav clearfix">
        <ul>
          <li>
            <router-link to="/" class="nav_a" active-class="nav_active" exact>主页</router-link>
          </li>
          <li>
            <router-link to="/dairy" class="nav_a" active-class="nav_active">日记</router-link>
          </li>
          <li>
            <router-link to="/photo" class="nav_a" active-class="nav_active">照片墙</router-link>
          </li>
          <li v-if="!getAuth">
            <router-link to="/login" class="nav_a" active-class="nav_active">登录</router-link>
          </li>
          <li v-else>
            <a href="javascript:void(0)" class="nav_user">
              <img :src="getAuth.header" class="circle" width="30" height="30"> {{getAuth.nickname}}
              <ul class="nav_user_ul">
                <li>
                  <router-link :to="{ name: 'userIndex', params: { uid: getAuth.id }}">我的主页</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'userAlbum', params: { uid: getAuth.id }}">我的相册</router-link>
                </li>
                <li>
                  <router-link to="/set/">管理中心</router-link>
                </li>
                <li class="nav_user_line"></li>
                <li>
                  <a href="javascript:void(0)" class="text-center" @click="logout()">退出</a>
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      showNav: false
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
      'getAuth'
    ]),
    ...mapActions([
      'userLogout',
      'authInfo'
    ])
  },
  mounted() {
    if (this.getToken) {
      this.$store.dispatch('authInfo')
    }
  },
  methods: {
    logoyt() {
      this.$store.dispatch('userLogout')
    },
    toggleNav() {
      this.showNav = !this.showNav
    }
  }
}
</script>

<style>
.header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 3;
    border-top:1px solid #59bfff;
    background: rgba(255,255,255,0.9);
    -webkit-box-shadow: 0 0 10px #ccc;
    -moz-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
}
.nav {
    float: right;
    margin-left: 20px;
}
.nav > ul > li {
    float: left;
    white-space: nowrap;
}
.nav > ul > li > a {
    display: block;
    padding: 20px;
    line-height: 20px;
}
.nav_a:hover {
    color: #fff;
    background: #59bfff;
    -webkit-transition: color .5s, background .2s ease;
    transition: color .5s, background .2s ease;
}
.nav_active {
    color: #fff;
    background: #59bfff;
}
.nav .nav_user {
    position: relative;
    padding: 15px;
}
.nav_user:hover .nav_user_ul {
    display: block;
}
.nav_user_ul{
    display: none;
    position: absolute;
    width:100px;
    top: 55px;
    right: 0;
    z-index: 3;
    font-size: 12px;
    background: #fff;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 2px;
    box-shadow: 0 2px 8px 1px rgba(0,0,0,0.2);
    -webkit-transition: all .2s;
    transition: all .2s;
}

.nav_user_line{
    padding: 0;
    height: 3px;
    position: relative;
    top: -1px;
    display: block;
    margin: 0 -2px;
    border-bottom:1px solid #d9d9d9;
}
.nav_user_ul:before{
    content: "";
    width:0;
    height:0;
    position: absolute;
    top:-10px;
    left:50%;
    border-bottom: 10px solid #ccc;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}
.nav_user_ul:after{
    content: "";
    width:0;
    height:0;
    position: absolute;
    top:-9px;
    left:50%;
    border-bottom: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    z-index: 1;
}
.nav_user_ul a{
    display: block;
    padding: 9px 13px;
}
.nav_user_ul a:hover{
    background: #f1efef;
}

.logo {
    float: left;
    margin-top: 5px;
}
.nav_category{
    display: none;
    float: right;
    margin-top: 5px;
    padding: 0 15px;
    line-height: 50px;
    font-size: 26px;
}
.nav_mobile{
    display: none;
    position: absolute;
    top: 55px;
    left: 0;
    right: 0;
    overflow: hidden;
    background: rgba(255,255,255,0.9);
    padding: 8px 0;
    z-index: 10;
}
.nav_mobile > ul >li >a {
    display: block;
    padding: 8px 15px;
}
</style>


