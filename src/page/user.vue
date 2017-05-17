<template>
  <div>
    <com-userBanner></com-userBanner>
    <div class="container pad_t15">
      <com-userTab :uid="uid"></com-userTab>
      <router-view :uid="uid"></router-view>
    </div>
  </div>
</template>

<script>
import userBanner from '../components/user/banner'
import userTab from '../components/user/tab'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    comUserBanner: userBanner,
    comUserTab: userTab
  },
  data() {
    return {
      uid: this.$route.params.uid
    }
  },
  computed: {
    ...mapActions({
      userInfo: 'userInfo'
    })
  },
  mounted() {
    if (this.uid) {
      this.$store.dispatch('userInfo', this.uid)
    }
  },
  watch: {
    $route() {
      if (this.$route.params.uid && this.uid !== this.$route.params.uid) {
        this.uid = this.$route.params.uid
        this.$store.dispatch('userInfo', this.$route.params.uid)
      }
    }
  }
}
</script>

<style>
  .banner_user{
      height: 360px;
      position: relative;
      background: url("../assets/img/dairy_bg05.jpg") no-repeat center center;
      background-size: cover;
  }

  .banner_photo{
      position: relative;
      width:108px;
      height:218px;
      margin: 0 auto;
      padding-top: 110px;
  }
  .photo_wrap{
      position: relative;
      width: 108px;
      height: 108px;
      padding: 4px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
  }
  .photo_wrap img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
  }
  .banner_name{
      padding-top: 10px;
      color:#fff;
      text-shadow: 0 0 4px rgba(0,0,0,0.5);
  }
  .banner_name > h3{
      margin-bottom: 10px;
  }
  .banner_name > h3 > span{
      display: inline-block;
      color:#fff;
      font-size: 12px;
      line-height: 12px;
      height: 18px;
      padding: 3px;

  }
  .tab_user{
      height: 45px;
      overflow: hidden;
  }
  .tab_user table{
      width:100%;
  }
  .tab_user_a{
      position: relative;
      display: inline-block;
      padding: 0 7px;
      line-height: 45px;
      overflow: hidden;
  }
  .tab_user_a:after{
      content: "";
      position: absolute;
      left:0;
      bottom: -2px;
      width:100%;
      height:2px;
      background: #59bfff;
      -webkit-transition: all .2s ease;
      transition: all .2s ease;
  }
  .tab_user_a:hover{
      color: #000;
  }
  .tab_user_a:hover:after{
      bottom: 0;
  }
  .user_active{
      font-weight: bold;
      color: #000;
  }
  .user_active:after{
      bottom: 0;
  }

  .panel_homepage_num{
      padding: 10px 0;
  }
  .panel_homepage_box a{
      display: block;
  }
  .panel_homepage_box a strong{
      display: block;
      margin-bottom: 5px;
      font-family: Tahoma;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
  }
  .panel_homepage_box a span{
      color:#808080;
      font-size: 12px;
  }
  .panel_homepage_box + .panel_homepage_box{
      border-left:1px solid #eee;
  }
</style>
