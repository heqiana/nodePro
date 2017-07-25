<template>
<div class="content">
<div class="info">
  <div class="img">
    <img :src="listData.avatar_url" :title="listData.loginname">
    <span>{{listData.loginname}}</span>
  </div>
  <p>
    <icon name='score' scale='4'></icon>
    <span>积分：</span>
    <b>{{listData.score}}</b>
  </p>
  <p>
    <icon name='github' scale='4'></icon>
    <span>Github：</span>
    <b>https://github.com/{{listData.loginname}}</b>
  </p>
  <p>
    <icon name='time' scale='4'></icon>
    <span>注册时间：</span>
    <b>{{listData.create_at}}</b>
  </p>
</div>
<div class="join">
  <h3>最近参与的话题</h3>
  <ul>
    <li v-for="item in listData.recent_replies">
      <router-link :to="{ name: 'userInfo', params: { name: item.author.loginname }}">
      <img :src="item.author.avatar_url" :title="item.author.loginname">
      </router-link>
      <router-link :to="{ name: 'article' , params: { id: item.id }}">{{item.title}}</router-link>
    </li>
  </ul> 
</div>
<div class="join">
  <h3>最近创建的话题</h3>
  <ul>
    <li v-for="item in listData.recent_topics">
      <router-link :to="{ name: 'userInfo', params: { name: item.author.loginname }}">
      <img :src="item.author.avatar_url" :title="item.author.loginname">
      </router-link>
      <router-link :to="{ name: 'article' , params: { id: item.id }}">{{item.title}}</router-link>
    </li>
  </ul> 
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: '用户信息',
      listData: {}
    }
  },
  created () {
    this.$http({
      url: `https://cnodejs.org/api/v1${this.$route.path}`,
      method: 'get'
    }).then((res) => {
      this.listData = res.data.data
    }).catch((res) => {
      console.log('list.vue: ', res)
    })
  },
  // 路由改变调用方法
  beforeRouteUpdate (to, from, next) {
    this.$http({
      url: `https://cnodejs.org/api/v1${to.path}`,
      method: 'get'
    }).then((res) => {
      this.listData = res.data.data
    }).catch((res) => {
      console.log('UserInfo.vue: ', res)
    })
    next()
  },
  methods: {

  }
}
</script>
<style>
.content{
  background-color:#f9fafc;
  width: 60%;
}
.content .info{
  background-color: #eff2f7;
  padding: 1rem;
  border-radius: .3rem;
}
.content .info .img{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
}
.content .info .img img{
  width: 4rem;
  height: 4rem;
}
.content .info .img span{
    font-size: 25px;
    color: #000;
    margin-left: 1rem;
}
.content .info p{
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 1rem 0;
}
.content .info p b{
  color: gray;
  font-size: 18px;
  font-weight: normal;
}
.content .info p span{
  margin-left: .5rem;
  font-size: 16px;
}
.join{
    background: #e5e9f2;
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: .3rem; 
}
.join h3{
  font-size:20px;
  color: #000;
}
.join ul li{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
  margin: 1rem 0;
  border-bottom: 2px solid #c0ccda;
  padding-bottom: 1rem;
}
.join ul li img{
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
}
.join ul li a{
  font-size: 20px;
  color: #000;
}
</style>