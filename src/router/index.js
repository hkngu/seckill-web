import Vue from "vue"
import VueRouter from 'vue-router'

import login from "../views/Login"
import Main from '../views/Main'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'login',
      component: login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
