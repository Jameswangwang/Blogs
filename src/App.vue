<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
    <com-message></com-message>
  </div>
</template>

<script>
import Header from './components/header.vue'
import message from './components/message'

export default {
  components: {
    myHeader: Header,
    comMessage: message
  }
}
</script>
