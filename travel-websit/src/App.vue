<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>
    <v-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import VFooter from '@/common/V-Footer'
export default {
  name: 'App',
  components: {
    NavBar,
    VFooter
  }
}
</script>

<style>
 @import './style/common.css'
</style>
