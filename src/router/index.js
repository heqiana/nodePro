import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import userInfo from '@/components/userInfo'
import article from '@/components/article'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/user/:name',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/topic/:id',
      name: 'article',
      component: article
    }
  ]
})
