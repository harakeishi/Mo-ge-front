<template>
  <div id="Generation">
    <img :src='impath' class="mov" animation_mode="once">
    <input type="button" @click="skip" class="skip" value="スキップ">
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Generation',
  data () {
    return {
      a: 10,
      impath: null
    }
  },
  mounted () {
    this.impath = require("../assets/soukan.gif")
  },
  created () {
    setInterval(() => { this.a-- }, 1000)
  },
  methods: {
    skip () {
      router.push('result')
    }
  },
  watch: {
      a: function(v) {
        if (v <= 0) {
          this.skip()
        }
      }
    }
}
</script>

<style scoped>
#generation{

}
.mov{
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}
.skip{
  position: fixed;
  z-index: 10;
  top: 5vh;
  right: 5vw;
  border-radius: 10px;
  font-size: 3vw;
  background-color: rgba(255, 134, 47, 0.5);
  border: none;
}
</style>
