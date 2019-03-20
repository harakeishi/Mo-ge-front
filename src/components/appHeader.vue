<template>
  <div id="appHeader">
    <div class="left">
      <router-link :to="{ name: 'home'}"><img src="../assets/logo.png" alt="logo" id="logo"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appHeader'
}
</script>

<style scoped>
#appHeader{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 75px;
  background-color: rgb(17, 180, 191);
}
.left{
  text-align: left;
}
#logo{
  max-width: 60%;
  height: 75px;
}
</style>
