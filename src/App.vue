<template>
  <div id="app">
    <my-head></my-head>
    <router-view></router-view>
  </div>
</template>

<script>
import myHead from './components/head.vue'

export default {
  name: 'app',
  components: {
    myHead
  }
}
</script>

<style>
#app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 6rem;
    display: flex;
    justify-content: space-around;
    font-size: 22px;
    word-break: break-all;
}
body,
div,
span,
a,
p,
ul,
li {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
</style>
