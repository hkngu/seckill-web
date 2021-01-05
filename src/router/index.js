import Vue from "vue"
import VueRouter from 'vue-router'

import Login from "../views/Login"

import GoodsList from "@/views/goods/GoodsList";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // 商品列表页
      path: '/goodsList',
      name: 'GoodsList',
      component: GoodsList
    }

  ]
})
