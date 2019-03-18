<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="header_blank"></div>
    <router-view/>
  </div>
</template>
<script>
import appHeader from './components/appHeader'
export default {
  name: 'app',
  components: {
    AppHeader: appHeader
  }
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(0, 10, 41);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
}
.header_blank{
  margin-top: 75px;
}
</style>
