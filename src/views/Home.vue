<template>
  <div id="home">
    <h1>ようこそ</h1>
    <p>ここは写真を素材としてモンスターを召喚できます。</p>
    <input @change="selectedFile" type="file" name="file"><br>
    <button @click="upload" type="submit">召喚！</button>
    <div class="">
      <p>＊注：ファイルはアップロードされません。</p>
      <p>ファイルサイズを参照してサイズのみを使用しています。</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  name: 'home',
  data () {
    return {
      msg: {
        time: 'now',
        name: 'name',
        university: 'uni'
      },
      uploadFile: null,
      error: null
    }
  },
  mounted () {
  },
  methods: {
    test () {
      var params = new URLSearchParams()
      params.append('name', 'keishi')
      params.append('uni', 'kanagawa')
      axios.post('http://localhost/api.php', params).then(response => { this.msg = response.data }).catch(error => { this.error = error })
    },
    selectedFile (e) {
      // 選択された File の情報を保存しておく
      e.preventDefault()
      let files = e.target.files
      this.uploadFile = files[0]
    },
    upload () {
      console.log(1)
      this.$store.commit('UPDATE_GENERATION_NUMBER', this.uploadFile.size)
      /*
      ここにサーバ通信とレスポンスをストアに保存するコードを書く
      */
      router.push('generation')
    }
  }
}
</script>

<style scoped>
#home{
  color: rgb(0, 0, 0);
  width: 90%;
  margin: auto;
  text-align: center;
  background-color: rgb(163, 152, 142);
  border-radius: 5px;
}
</style>
