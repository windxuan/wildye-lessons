import Vue from 'vue'
import Router from 'vue-router'

// view
import index from '@/view/'
import login from '../view/login'
import survey from '../view/survey'
import summary from '../view/summary'
import thank from '../view/thank'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/survey',
      component: index
    },
    {
      path: '/login',
      component: login
    },
    {
      // 答卷页面
      path: '/survey/:id',
      component: survey
    },
    {
      path: '/summary',
      component: summary
    },
    {
      path: '/end',
      component: thank
    }
  ]
})
