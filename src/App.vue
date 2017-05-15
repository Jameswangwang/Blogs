<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  components: {
    myHeader: Header
  }
}
</script>
