<template>
  <div id="home">
    <h1>home</h1>
    <h1>time:{{ msg.time }}<br> name:{{ msg.name }}<br> uni:{{ msg.university }}</h1>
    <input type="button" @click="test" value="ajax!"><br>
    <router-link :to="{ name: 'about'}">about</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      msg: {
        time: 'now',
        name: 'name',
        university: 'uni'
      }
    }
  },
  components: {
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => console.log(response.data.bpi))
  },
  methods: {
    test () {
      var params = new URLSearchParams()
      params.append('name', 'keishi')
      params.append('uni', 'kanagawa')
      axios.post("http://localhost/api.php", params)
      .then(response => {this.msg = response.data })
      .catch(error => { console.log(error) })
    }
  }
}
</script>

<style scoped>
#home{
  color: rgb(255, 255, 255);
}
</style>
