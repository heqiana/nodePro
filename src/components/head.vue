<template>
<div class="head">
	<router-link to="/">
		<img src="../assets/cnodejs.svg" alt="codejs">
	</router-link>
	<el-button type ='text' @click='dialogVisible = true'>关于</el-button>
	<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  size="tiny"
  :before-close="handleClose">
  <div class='dialogDiv'>
                <span>
                    <strong>作者: &nbsp;&nbsp;</strong>
                </span>
                <a href='https://shuirong.github.io/' target='_blank'>贺茜</a>
                </span>
                <br>
                <span>
                    <strong>技术栈: </strong>
                </span>
                <ul>
                    <li>Vue.js</li>
                    <li>Vue-router</li>
                    <li>Axios</li>
                    <li>Element</li>
                    <li>CnodeJS API</li>
                </ul>
            </div>
</el-dialog>
</div>
</template>
<style scoped>
@import url("https://cdn.bootcss.com/element-ui/1.2.8/theme-default/index.css");
.head {
    background: #324057;
    height: 3.6rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.head img {
    width: 10rem;
    height: 3.5rem;
    margin-left: 10rem;
}
.head>button {
    display: inline-block;
    float: right;
    line-height: 3.6rem;
    margin-right: 10rem;
    font-weight: bold;
    font-size: 20px;
    color: white;
    letter-spacing: 2px;
    padding-top: 0.2rem;
}

.head .dialogDiv {
    font-size: 17px;
}

.head ul {
    margin-left: 1rem;
}

.head a {
    text-decoration: none;
    color: #58B7FF;
}

.head .star {
    font-weight: bold;
    color: #1D8CE0;
    font-size: 20px;
}
</style>
<script>
export default {
  name: 'head',
  data () {
    return {
      dialogVisible: false
    }
  },

  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
    }
  }
}
</script>