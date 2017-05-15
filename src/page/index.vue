<template>
  <div class="index_bg">
    <div class="index_move" :class="{'index_move_toggle': toggle}">
      <p class="index_move_p">
        <span :class="{'fade': !toggle}">Britain</span>
        <span :class="{'fade': toggle, 'fr': true}">China</span>
      </p>
    </div>
    <div class="index_center text-center">
      <div class="index_time">
        <div class="outterCircle">
          <img src="/static/img/secondBoxOutterCircle.png" alt="外层时钟">
        </div>
        <div class="innerCircle">
          <img src="/static/img/secondBoxInnerCircle.png" alt="内层时钟">
        </div>
        <h1 class="index_h1" v-if="toggleTime">{{ hour }}<span @click="move"> H </span>{{minute}}</h1>
        <div class="second_box">
          <transition-group name="second" tag="div">
            <span v-for="decade in sencondDecade" :key="decade" class="second_s second_decade">
              {{ decade }}
            </span>
          </transition-group>
          <transition-group name="second" tag="div">
            <span v-for="unit in secondUnit" :key="unit" class="second_s second_unit">
              {{ unit }}
            </span>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data() {
    return {
      hour: '',
      minute: '',
      second: '',
      sencondDecade: [],
      secondUnit: [],
      toggle: false,
      toggleTime: true
    }
  },
  mounted() {  /* mounted在vue的渲染模板挂载到$el元素上才会调用,并且在vue的生命周期中只调用一次 */
    this.toggle = false
    this.getTime()
    this.startTime = setInterval(this.getTime, 500)
  },
  methods: {
    getTime() {
      const site = this.toggle ? 'Europe/London' : 'Asia/Shanghai'
      var today = moment().tz(site)
      this.hour = this.checkTime(today.format('H'))
      this.minute = this.checkTime(today.format('m'))
      var s = this.checkTime(today.format('s'))
      this.sencondDecade.pop()   /* pop() 方法用于删除并返回数组的最后一个元素 */
      this.sencondDecade.push(s.toString()[0])
      this.secondUnit.pop()
      this.secondUnit.push(s.toString()[1])
    },
    checkTime(i) {
      if (i < 10) {
        i = '0' + i
      }
      return i
    },
    move() {
      this.toggle = !this.toggle
    }
  },
  beforeDestroy () {
    clearInterval(this.startTime)
  }

}
</script>

<style>
.index_bg:before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 50%;
  bottom: 0;
  background: url('/static/img/bgl.jpg') no-repeat;
  background-size: cover;
  background-position: center bottom;
}

.index_bg:after {
  content: '';
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  background: url('/static/img/bgr.jpg') no-repeat;
  background-size: cover;
  background-position: center bottom;
}

.index_move {
  position: fixed;
  top: 0;
  width: 50%;
  left: 50%;
  bottom: 0;
  z-index: 1;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  background: #48515A;
}
.index_move_toggle{
    left: 0;
    background: #ff5b7e;
}
.index_move_p {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  color: #fff;
  padding: 0 20px;
}

.index_center {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: table;
  height: 100%;
  width: 100%;
}

.index_time {
  display: table-cell;
  vertical-align: middle;
  position: relative;
}

.outterCircle {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -235px;
}

.outterCircle>img {
  border-radius: 50%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  /*设置旋转元素的基点位置  可选参数： X轴 Y轴  Z轴*/
  -webkit-animation: secondOutterCircle 60s linear infinite;
  animation: secondOutterCircle 60s linear infinite;
  /*可选参数： 动画名称， 动画时间， 动画速度曲线(linear：动画从头到尾的速度是相同的)，动画播放次数(infinite： 无限次播放) */
}

@keyframes secondOutterCircle {
  0% {
    transform: rotate(0deg);
    /*定义 2D 旋转*/
  }
  100% {
    transform: rotate(360deg);
    /*默认顺时针旋转*/
  }
}

.innerCircle {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -235px;
  padding: 35px;
}

.innerCircle>img {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: secondInnerCircle 60s linear infinite;
  animation: secondInnerCircle 60s linear infinite;
}

@keyframes secondInnerCircle {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.index_h1 {
  position: relative;
  padding-top: 40px;
  color: #fff;
  font-size: 136px;
  line-height: 1;
  /*1代表当前区域的高度， 或者说是字体的高度*/
  text-shadow: 0 0 3px #666;
}

.index_h1 > span {
  cursor: pointer;
  font-size: 48px;
  padding: 0 10px;
  vertical-align: middle;
  transition: all .3s;
  display: inline-block;
  transform: rotate(0deg);
}

.index_h1 > span:hover {
  transform: rotate(180deg);
}

.second_box{
    height: 40px;
    overflow: hidden;
    position: relative;
}
.second_s{
    position: absolute;
    color: #fff;
    font-size: 24px;
    line-height: 34px;
    height: 40px;
    vertical-align: middle;
    text-shadow: 0 0 3px #666;
    transition: all .5s ease;
    top: 0;
    padding: 3px;
}
.second_decade{
    right: 50%
}
.second_unit{
    left: 50%;
}

.second-enter-active,
.second-leave {
    opacity: 1;
}
.second-enter,
.second-leave-active {
    transform: translateY(34px);
    opacity: 0;
}
.second-leave-active {
    position: absolute;
    transform: translateY(-34px);
}
.second-leave-active {
    transform: translateY(-34px);
}
</style>
