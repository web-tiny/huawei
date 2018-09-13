import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['@/views/home.vue'], resolve),
    meta: { requireToken: true }
  },
  { path: '*', redirect: '/' }
]

export default new Router({
  routes
})
