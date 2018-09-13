import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { // ** 首页
    path: '/',
    name: 'home',
    component: resolve => require(['@/views/home.vue'], resolve),
    meta: { requireToken: true }
  },
  { // ** 起点/目的地
    path: '/address',
    name: 'address',
    component: resolve => require(['@/views/address.vue'], resolve),
  },
  { // ** 派车
    path: '/dispatch',
    name: 'dispatch',
    component: resolve => require(['@/views/dispatch.vue'], resolve),
  },
  { // ** 订单信息
    path: '/orderInfo',
    name: 'orderInfo',
    component: resolve => require(['@/views/orderInfo.vue'], resolve),
  },
  { // ** 订单确认
    path: '/orderConfirm',
    name: 'orderConfirm',
    component: resolve => require(['@/views/orderConfirm.vue'], resolve),
  },
  { // ** 投诉
    path: '/complain',
    name: 'complain',
    component: resolve => require(['@/views/complain.vue'], resolve),
  },
  { path: '*', redirect: '/' }
]

export default new Router({
  routes
})
