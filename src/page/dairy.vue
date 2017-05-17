<template>
  <div>
    <search @keyword-change="keywordChange"></search>
    <div class="container pad_t15">
      <div class="row">
        <div class="col-md-9">
          <div class="panel_h">
            <h3>
              <i class="iconfont icon-office h3_icon"></i> 日记</h3>
          </div>
          <div class="row dairy-line">
            <div class="col-md-12">
              <div class="panel panel_dairy hover_sh" v-for="arcitle in getArticleList.list">
                <div class="panel_tit">
                  <router-link :to="{ name: 'page', params: { aid: arcitle._id }}">
                    <h4>{{arcitle.title}}</h4>
                  </router-link>
                </div>
                <div class="panel_body">
                  <div class="row">
                    <div class="col-sm-10">
                      <router-link :to="{ name: 'page', params: { aid: arcitle._id }}">
                        <div class="panel_content" v-html="arcitle.content"></div>
                      </router-link>
                    </div>
                    <div class="col-sm-2 col-xs-6 pad_l0">
                      <img class="panel_body_img" :src="arcitle.image">
                    </div>
                  </div>
                </div>
                <div class="panel_foot">
                  <span title="日期">
                    <i class="iconfont icon-clock"></i> {{arcitle.created | date}}</span>
                  <span>
                    <i class="iconfont icon-account"></i>
                    <router-link :to="{ name: 'userIndex', params: { uid: arcitle.authId._id }}" class="link">{{arcitle.authId.nickname}}</router-link>
                  </span>
                  <span class="hide_mobile" title="标签">
                    <i class="iconfont icon-discount"></i> {{arcitle.tag}}</span>
                  <span class="hide_mobile" title="阅读">
                    <i class="iconfont icon-browse"></i> {{arcitle.pv}}</span>
                  <span class="hide_mobile" title="留言">
                    <i class="iconfont icon-comments"></i> {{arcitle.commentCount}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="panel_msg">
            <template v-if="getArticleList.status == 0">加载更多</template>
            <template v-if="getArticleList.status == 1">加载中...</template>
            <template v-if="getArticleList.status == 2">没有更多日记啦</template>
          </div>
        </div>
        <div class="col-md-3 pad_l0 hide_mobile">
          <div class="panel_s" v-if="getAuth">
            <div class="panel_head">
              <div class="panel_head_img">
                <router-link :to="{ name: 'userIndex', params: { uid: getAuth.id }}">
                  <img class="circle" src="../test/img/d.jpg" width="100" height="100">
                </router-link>
              </div>
            </div>
            <div class="panel_user">
              <p>
                <router-link :to="{ name: 'userIndex', params: { uid: getAuth.id }}">
                  <strong>{{getAuth.nickname}}</strong>
                </router-link>
              </p>
              <div class="panel_homepage_num clearfix text-center">
                <div class="col-xs-4 panel_homepage_box">
                  <router-link :to="{ name: 'userIndex', params: { uid: getAuth.id }}">
                    <strong>{{getAuth.articleCount}}</strong>
                    <span>日记</span>
                  </router-link>
                </div>
                <div class="col-xs-4 panel_homepage_box">
                  <router-link :to="{ name: 'userIndex', params: { uid: getAuth.id }}">
                    <strong>{{getAuth.collectCount}}</strong>
                    <span>收藏</span>
                  </router-link>
                </div>
                <div class="col-xs-4 panel_homepage_box">
                  <router-link :to="{ name: 'userAlbum', params: { uid: getAuth.id }}">
                    <strong>{{getAuth.photoCount}}</strong>
                    <span>图片</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
  
          <div class="panel_s">
            <h5>
              标签
            </h5>
            <div class="panel_s_body">
              <ul class="ul_text">
                <li v-for="(tag,index) in getTags">
                  <a href="javascript:void(0)" v-bind:class="{link: tagName==getTags[index]}" @click="tagChange(index)">{{tag}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../components/search'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    search
  },
  data() {
    return {
      keyword: '',
      tagName: ''
    }
  },
  computed: {
    ...mapGetters([
      'getArticleList',
      'getAuth',
      'getTags'
    ]),
    ...mapActions([
      'articleList',
      'articleClear',
      'tag',
      'articleKeyword',
      'articleTagName'
    ])
  },
  mounted() {
    this.$store.dispatch('articleClear')  // 清空文章
    this.$store.dispatch('tags')      // 读取数据库中的标签
    this.tagName = this.getArticleList.tagName    // 判断当前所在的标签
    this.loadArticle()  // 加载全部文章
    window.addEventListener('scroll', this.loadMore)  // 滚动加载
  },
  methods: {
    keywordChange(val) {
      this.keyword = val
    },
    tagChange(index) {
      if (this.tagName === this.getTags[index]) {
        this.tagName = this.tagName
      } else {
        this.tagName = this.getTags[index]
      }
      this.$store.dispatch('articleClear')
      this.$store.dispatch('articleTagName', this.tagName)
      setTimeout(() => {
        this.loadArticle()
      }, 3000)
    },
    loadArticle() {
      const lastArcitle = this.getArticleList.list[this.getArticleList.list.length - 1]
      const time = lastArcitle ? new Date(lastArcitle.created) : new Date()
      var data = time.getTime()
      if (this.getArticleList.keyword || this.getArticleList.tagName) {
        data += '?'
        if (this.getArticleList.keyword) data = data + 'search=' + this.getArticleList.keyword
        if (this.getArticleList.tagName) data = data + '&tag=' + this.getArticleList.tagName
      }
      this.$store.dispatch('articleList', data)
    }
  },
  loadMore() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 网页被卷去的高
    const allHeight = document.body.scrollHeight // 网页正文全文高
    const pageHeight = document.documentElement.clientHeight // 内容可视区域的高度
    if (scrollTop === allHeight - pageHeight && this.getArticleList.status === 0) {
      this.loadArticle()
    }
  },
  watch: {
    keyword() {
      this.$store.dispatch('articleClear')
      this.$store.dispatch('articleKeyword', this.keyword)
      this.loadArticle()
    }
  },
  filters: {
    date: function (value) {
      var date = new Date(value)
      return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.loadMore)
  }
}
</script>

<style>
.container .dairy-line {
  position: relative;
  padding-right: 36px;
}

.container .dairy-line:before {
  content: '';
  position: absolute;
  top: -15px;
  bottom: 0;
  display: block;
  right: 35px;
  width: 2px;
  background: #aedbfa;
}

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

.panel {
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
  border-right: solid 1px #d6d6d7;
  border-bottom: solid 1px #d1d1d2;
}

.panel_dairy {
  margin-right: 14px;
}

.panel_dairy:before {
  content: '';
  position: absolute;
  top: 15px;
  right: -37px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #f1efef;
  background: #aedbfa;
}

.panel_dairy:after {
  content: '';
  position: absolute;
  top: 15px;
  right: -37px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

.panel_dairy:hover:after {
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

.panel_tit {
  position: relative;
  border-radius: 5px 5px 0 0;
  background: #edf8fe;
  padding: 10px 20px;
  color: #59bfff;
}

.panel_dairy>.panel_tit a {
  color: #59bfff;
}

.panel_dairy>.panel_tit h4 {
  display: inline-block;
  -webkit-transition: padding-left .5s ease;
  transition: padding-left .5s ease;
}

.panel_dairy>.panel_tit h4:hover {
  padding-left: 30px;
}

.panel_dairy>.panel_tit:before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  right: -10px;
  margin-top: -10px;
  border-left: 10px solid #d6d6d7;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

.panel_dairy>.panel_tit:after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  right: -9px;
  margin-top: -10px;
  border-left: 10px solid #edf8fe;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  z-index: 1;
}

.panel_body {
  padding: 10px 20px;
  overflow: hidden;
}

.panel_body_img {
  width: 100%;
  border: 1px solid #f2f2f2;
  padding: 5px;
}

.panel_foot {
  border-top: 1px solid #eee;
  padding: 10px 0;
  margin: 0 20px;
}

.panel_foot>span {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}

.panel_content {
  line-height: 26px;
  max-height: 104px;
  overflow: hidden;
}

.panel_s {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
  border-right: solid 1px #dededf;
  border-bottom: solid 1px #d9d9da;
}

.panel_s>h5 {
  padding: 10px 20px 5px;
  border-bottom: 1px solid #eee;
}

.panel_s_body {
  padding: 10px 0;
  margin: 0 20px;
}

.panel_s_foot {
  border-top: 1px solid #eee;
  text-align: center;
}

.panel_s_foot>a {
  padding: 10px 0;
  display: block;
}

.panel_s_foot>div {
  padding: 10px 20px;
}

.ul_text {
  line-height: 26px;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
}

.ul_text li {
  border-bottom: 1px dashed #eee;
}

.ul_text li:last-child {
  border-bottom: 0;
}

.panel_head {
  position: relative;
  height: 90px;
  background: url('../assets/img/panel_head.jpg') no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0 0;
}

.panel_head_img {
  width: 110px;
  height: 110px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: absolute;
  bottom: -40px;
  left: 50%;
  margin-left: -55px;
}

.panel_user {
  text-align: center;
  padding-top: 50px;
}

.panel_user>p {
  font-size: 16px;
}

.panel_msg {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
  border-right: solid 1px #dededf;
  border-bottom: solid 1px #d9d9da;
  line-height: 45px;
  text-align: center;
}

.panel_homepage_num {
  padding: 10px 0;
}

.panel_homepage_box a {
  display: block;
}

.panel_homepage_box a strong {
  display: block;
  margin-bottom: 5px;
  font-family: Tahoma;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
}

.panel_homepage_box a span {
  color: #808080;
  font-size: 12px;
}

.panel_homepage_box+.panel_homepage_box {
  border-left: 1px solid #eee;
}
</style>
