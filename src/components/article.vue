<template>
<div class="main">
<div class="left">
  <div class="msg">
    <span>发布于：{{listData.create_at}}</span>
    <span>作者：{{listData.author.loginname}}</span>
    <span>浏览量：{{listData.visit_count}}</span>
    <span>来自：{{listData.tab}}</span>
  </div>
  <h3>{{listData.title}}</h3>
  <div class="content-html" v-html="listData.content"></div>
  <div class="replay">
    <ul>
      <li v-for="item in listData.replies">
        <img :src="item.author.avatar_url" :title="item.author.avatar_url">
        <div class="right-msg">
          <div class='top'>
            <b>{{item.author.loginname}}</b>
            <span>{{item.create_at}}</span>
          </div>
          <div class="bottom" v-html='item.content'>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
<div class="right">
  <div class="img">
    <img :src="listData.author.avatar_url" :title="listData.author.avatar_url" >
    <span>{{listData.author.loginname}}</span>
  </div>
  <p>
    <icon name='github' scale='1.5'></icon>
    <span>https://gihub.com/{{listData.author.loginname}}</span>
  </p>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      listData: {}
    }
  },
  methods: {

  },
  created () {
    this.$http({
      url: `https://cnodejs.org/api/v1${this.$route.path}`,
      method: 'get'
    }).then((res) => {
      this.listData = res.data.data
    }).catch((res) => {
      console.log('article', res)
    })
  }
}
</script>
<style>
.main{
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row;
}
.main .left{
    border: 1px solid #ddd;
    font-size: 20px;
    padding: 2rem;
    background: #f9fafc;
    margin-right: 1rem;
    width: 80%;
}
.main .left .msg span{
  font-size: 17px;
    color: #8492a6;
    margin:0 .5rem;

}
.main .left h3{
  color: #000;
  font-size: 1.5rem;
}
.main .left .content-html{
    border: 1px solid #ddd;
    line-height: 1.6;
    padding-bottom: 1rem;
    background: #eff2f7;
    width: 92%;
    padding: 2rem;
    color: #333;
    overflow: hidden;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    font-size: 22px;
    word-wrap: break-word;
}
.main .left .replay ul li{
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid #c0ccda;
    padding: 1rem 0;
} 
.main .left .replay ul li img{
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
}
.main .left .replay ul li .right-msg .top b{
  color: #475669;
    font-size: 20px;
    font-weight: normal; 
}
.main .left .replay ul li .right-msg .top span{
  font-size: 16px;
    color: #8492a6;
}
.main .left .replay ul li .right-msg .bottom p{
  font-size: 20px;
}
.main .right{
border: 1px solid #ddd;
    font-size: 20px;
    padding: 2rem;
    background: #f9fafc;
}
.main .right .img span{
  font-size:20px; 
}
.main .right img{
  width: 8rem;
  height: 8rem;
}
.main .right  p span{
  font-size:16px;
  color: gray;
}

</style>