<template>
	<div class="content">
   <ul>
     <li v-for="item in listData">
       <router-link :to="{ name: 'userInfo', params: { name: item.author.loginname }}">
       <img :src='item.author.avatar_url' :title='item.author.loginname'>
       </router-link>
       <div class="right">
        <router-link :to="{ name: 'article', params: { id: item.id }}">{{item.title}}</router-link>
        <div class="msg">
          <span>回复：{{item.reply_count}}</span>
          <span>创建于：{{filterTime}}</span>
        </div>
       </div>
     </li>
   </ul> 
  </div>
</template>

<style>
.content{
  width: 60%;
  padding: 3rem;
  border:1px solid #ddd;
  background:#f9fafc;
}
ul li{
  overflow: hidden;
  display: flex;
  border-bottom: 2px solid #c0ccda;
  flex-direction: row; 
  justify-content: flex-start;
  padding: 1rem 0;
}
ul li img{
  width: 4rem;
  height: 4rem;
  flex-direction: column;
  float: left;
  margin-right: 2rem;
}
ul li .right{
  /*float: left;*/
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
ul li .right a{
  font-size: 26px;
  color: black;
}
ul li .right a:visited{
  color: gray;
}
ul li .right span{
  font-size: 17px;
  color: #8492a6;
  margin-right: 2rem
}


</style>
<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 111,
        listData: {},
        item: {
          create_at: '2017-04-13T02:41:41.818Z'
        },
        limit: 0
      }
    },
    methods: {
      scrollGetData: function () {
        // 滚动高度
        const sumH = document.body.scrollHeight
        // 可见区域高度
        const viewH = document.documentElement.clientHeight
        // 网页被卷去的高
        const scrollH = document.body.scrollTop
        if (viewH + scrollH === sumH) {
          this.getData()
        }
      },
      getData: function () {
        this.limit += 10
        this.$http({
          url: 'https://cnodejs.org/api/v1/topics',
          method: 'get',
          params: {
            page: 1,
            limit: this.limit,
            mdrender: 'false'
          }
        }).then((res) => {
          this.listData = res.data.data
        }).catch((res) => {
          console.log('list.vue: ', res)
        })
      }
    },
    created () {
      this.getData()
    },
    mounted () {
      window.addEventListener('scroll', this.scrollGetData)
    },
    computed: {
      filterTime () {
        return String(this.item.create_at).match(/.{10}/)[0]
      }
    }
  }
</script>