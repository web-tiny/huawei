import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import alertRegistry from './components/appAlert/index'
import './globle/base.css'

// alert 组件
Vue.use(alertRegistry)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data () {
    return {
      screenWidth: document.getElementsByTagName('html')[0].getBoundingClientRect().width
    }
  }
})
