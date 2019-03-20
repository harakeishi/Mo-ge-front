<template>
  <div id="result">
    <h1>{{ a }}</h1>
  </div>
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      a: this.$store.state.GenerationNumber
    }
  }
}
</script>

<style scoped>
#result{
  color: rgb(255, 255, 255);
}
</style>
