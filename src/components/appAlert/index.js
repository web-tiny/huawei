/*
 * @Author: KevinRen
 * @Date: 2018-05-24 16:58:07
 * @LastEditors: KevinRen
 * @LastEditTime: 2018-05-24 16:58:07
 * @Description: mail:tosaicore@gmail.com
 */

import Vue from 'vue'
import alertComponent from './alert.vue'
import toastComponent from './toast.vue'

const AlertConstructor = Vue.extend(alertComponent)
const ToastConstructor = Vue.extend(toastComponent)

function showAlert (opt) {
  const alertDom = new AlertConstructor({
    el: document.createElement('div'),
    data () {
      return {
        msg: opt.msg,
        cancelTxt: opt.cancelTxt,
        confirmTxt: opt.confirmTxt,
        show: true,
        cancelEvent: opt.onCancel,
        confirmEvent: opt.onConfirm,
        singleButton: opt.type === 'single'
      }
    },
    methods: {
      closeAlert: function () {
        this.cancelEvent && this.cancelEvent()
        this.show = false
      },
      confirm: function () {
        this.confirmEvent && this.confirmEvent()
        this.show = false
      }
      // closeWindow: function () {
      //   this.closeEvent && this.closeEvent()
      //   this.show = false
      // }
    }
  })

  document.body.appendChild(alertDom.$el)
}

function showToast (opt) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        show: true,
        msg: opt.msg || '',
        duration: opt.duration || 1500
      }
    },
    mounted: function () {
      setTimeout(() => { this.show = false }, this.duration)
    }
  })

  document.body.appendChild(toastDom.$el)
}

function registryAlert () {
  Vue.prototype.$alert = showAlert
  Vue.prototype.$toast = showToast
}

export default registryAlert
