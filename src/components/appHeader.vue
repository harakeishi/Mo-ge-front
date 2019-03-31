<template>
  <div id="appHeader">
    <div class="left">
      <router-link :to="{ name: 'home'}"><img src="../assets/logo.png" alt="logo" id="logo"></router-link>
    </div>
    <div class="right">
      <div id="nav-drawer">
          <input id="nav-input" type="checkbox" class="nav-unshown">
          <label id="nav-open" for="nav-input"><span></span></label>
          <label class="nav-unshown" id="nav-close" for="nav-input"></label>
          <div id="nav-content">
            <div class="login">
              <router-link :to="{ name: 'login'}">Login</router-link>
            </div>
          </div>
      </div>
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
  width: 90%;
  display: inline;
  float: left;
  text-align: left;
}
.right{
  float: right;
  display: inline-block;
  margin-right: 5%;
}
#logo{
  max-width: 80%;
  height: 75px;
}

#nav-drawer {
  position: relative;
}

/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}

/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 5vw;
  height: 1vh;
  vertical-align: middle;
}

/*ハンバーガーアイコンをCSSだけで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 1.5vh;/*線の太さ*/
  width: 7vw;/*長さ*/
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
}
#nav-open span:before {
  bottom: -2.5vh;
}
#nav-open span:after {
  bottom: -5vh;
}

/*閉じる用の薄黒カバー*/
#nav-close {
  display: none;/*はじめは隠しておく*/
  position: fixed;
  z-index: 99;
  top: 0;/*全体に広がるように*/
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}

/*中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;/*最前面に*/
  width: 80%;/*右側に隙間を作る（閉じるカバーを表示）*/
  max-width: 330px;/*最大幅（調整してください）*/
  height: 100%;
  background: #fff;/*背景色*/
  transition: .3s ease-in-out;/*滑らかに表示*/
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);/*左に隠しておく*/
}

/*チェックが入ったらもろもろ表示*/
#nav-input:checked ~ #nav-close {
  display: block;/*カバーを表示*/
  opacity: .5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);/*中身を表示（右へスライド）*/
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
</style>
