<template>
  <div>
    <search></search>
    <div class="container pad_t15">
      <div class="row riji">
        <div class="col-md-9">
          <div class="panel_h">
            <h3><i class="iconfont icon-office h3_icon"></i> 日记</h3>
          </div>
          <div class="row dairy-line">
            <div class="col-md-12" v-show="false">
              <div class="panel panel_dairy hover_sh">
                  <div class="panel_tit">
                      <router-link to="/"><h4>哈哈哈哈</h4></router-link>
                  </div>
                  <div class="panel_body">
                      <div class="row">
                          <div class="col-sm-10">
                              <router-link to="/">
                                  <div class="panel_content" v-html="">我是哈哈哈哈哈哈哈哈</div>
                              </router-link>
                          </div>
                          <div class="col-sm-2 col-xs-6 pad_l0">
                              <img class="panel_body_img">
                          </div>
                      </div>
                  </div>
                  <div class="panel_foot">
                      <span title="日期"><i class="iconfont icon-clock"></i> 2017-04-05</span>
                      <span><i class="iconfont icon-account"></i> <router-link to="/">CDX</router-link></span>
                      <span class="hide_mobile" title="标签"><i class="iconfont icon-discount"></i> 博客</span>
                      <span class="hide_mobile" title="阅读"><i class="iconfont icon-browse"></i> 22</span>
                      <span class="hide_mobile" title="留言"><i class="iconfont icon-comments"></i> 哈哈哈哈</span>
                  </div>
              </div>
            </div>
          </div>
          <div class="panel_msg">
            <template v-if="true">加载更多</template>
            <template v-if="false">加载中...</template>
            <template v-if="false">没有更多日记啦</template>
          </div>
        </div>
        <div class="col-md-3 pad_10 hide_mobile"></div>
      </div>
    </div>
  </div> 
</template>

<script>
  import search from '../components/search.vue'

  export default {
    components: {
      search
    }
  }
</script>

<style>
  .panel_h {
    background: #fff;
    border-radius: 5px;
    margin-bottom: 15px;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #d9d9da;
  }
  .panel_h h3 {
    padding: 5px 20px;
  }
  .dairy-line{
    position: relative;
    padding-right: 36px;
  }
  .riji .dairy-line:before{
    content:"";
    position: absolute;
    top:-15px;
    bottom:0;
    display: block;
    right: 35px;
    width:2px;
    background: #aedbfa;
  }
  .panel {
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 15px;
    border-right: 1px solid #d6d6d7;
    border-bottom: 1px solid #d1d1d2;
  }
  .panel_dairy{
    margin-right: 14px;
  }
  .panel_dairy:before{
        content: "";
        position: absolute;
        top:15px;
        right: -37px;
        width:14px;
        height:14px;
        border-radius: 50%;
        border:2px solid #f1efef;
        background: #aedbfa;
    }
    .panel_dairy:after{
        content: "";
        position: absolute;
        top:15px;
        right: -37px;
        width:14px;
        height:14px;
        border-radius: 50%;
    }
    .panel_dairy:hover:after{
        background: #59bfff;
        animation: pointScale 1s linear infinite;
    }

  @keyframes pointScale {
      0% {
          opacity: 1;
          transform: scale(0, 0);
      }
      100% {
          opacity: 0;
          transform: scale(1.5, 1.5);
      }
  }
  .panel_tit{
      position: relative;
      border-radius: 5px 5px 0 0;
      background: #edf8fe;
      padding: 10px 20px;
      color:#59bfff;
  }
  .panel_dairy > .panel_tit a{
      color:#59bfff;
  }
  .panel_dairy > .panel_tit h4{
      display: inline-block;
      -webkit-transition: padding-left .5s ease;
      transition: padding-left .5s ease;
  }
  .panel_dairy > .panel_tit h4:hover{
      padding-left: 30px;
  }
  .panel_dairy > .panel_tit:before{
      content: "";
      width:0;
      height:0;
      position: absolute;
      top:50%;
      right:-10px;
      margin-top: -10px;
      border-left: 10px solid #d6d6d7;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
  }
  .panel_dairy > .panel_tit:after{
      content: "";
      width:0;
      height:0;
      position: absolute;
      top:50%;
      right:-9px;
      margin-top: -10px;
      border-left: 10px solid #edf8fe;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      z-index: 1;
  }
  .panel_body{
    padding: 10px 20px;
    overflow: hidden;
  }
  .panel_body_img{
      width: 100%;
      border:1px solid #f2f2f2;
      padding: 5px;
  }
  .panel_foot{
      border-top: 1px solid #eee;
      padding: 10px 0;
      margin: 0 20px;
  }
  .panel_foot > span{
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;
  }
  .panel_content{
      line-height: 26px;
      max-height: 104px;
      overflow: hidden;
  }
  .panel_s{
      background: #fff;
      border-radius: 5px;
      margin-bottom: 15px;
      border-right: solid 1px #dededf;
      border-bottom: solid 1px #d9d9da;
  }
  .panel_s > h5{
      padding: 10px 20px 5px;
      border-bottom: 1px solid #eee;
  }
  .panel_s_body{
      padding: 10px 0;
      margin: 0 20px;
  }
  .panel_s_foot{
      border-top: 1px solid #eee;
      text-align: center;
  }
  .panel_s_foot > a{
      padding: 10px 0;
      display: block;
  }
  .panel_s_foot > div{
      padding:10px 20px;
  }
  .panel_msg{
    background: #fff;
    border-radius: 5px;
    margin-bottom: 15px;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #d9d9da;
    line-height: 45px;
    text-align: center;
}
</style>
