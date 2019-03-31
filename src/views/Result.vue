<template>
  <div id="result">
    <h1>{{ a }}</h1>
    <h1>id: {{ id }}</h1>
    <h1>name: {{ name }}</h1>
    <img :src=image alt="img">
    <h1>info: {{ info }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'result',
  data () {
    return {
      a: this.$store.state.GenerationNumber,
      id: null,
      name: null,
      info: null,
      image: null
    }
  },
  methods: {
  },
  mounted () {
    var params = new URLSearchParams()
    params.append('id', this.a)
    axios.post('http://localhost/monster/generatemonster.php', params).then(response => {
      this.id = response.data.id
      this.name = response.data.name
      this.info = response.data.info
      this.image = require('../assets/m_img/' + this.id + '.png')
    }).catch(error => { console.log(error) })
  }
}
</script>

<style scoped>
#result{
  color: rgb(255, 255, 255);
}
</style>
