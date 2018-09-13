import Vue from 'vue'
import config from '../config/config'
const vue = new Vue()

export function responseStatus (response) {
  const _data = JSON.parse(response.data)
  switch (_data.code) {
  case 200:
    return _data
  default:
    consoleInfo(response, _data.msg)
    return null
  }
}

export function errorStatus (status) {
  let msg = ''
  switch (status) {
  case 0:
    msg = '网络异常, 请稍后再试'
    break
  // 权限错误
  case 401:
  case 403:
    msg = '登录已过期，请重新登录'
    // wx.redirectTo({
    //   url: '../home/home'
    // })
    break
  // 网络错误
  case 408:
  case 504:
    msg = '可惜没有网，陪我到最后~'
    break
  default:
    msg = '遇到错误了，请稍后再试'
    break
  }

  vue.$toast({ msg: msg, duration: 3000 })
}

function consoleInfo (response, msg) {
  console.groupCollapsed('%c API response error ', config.titleStyle)
  console.log('%c url ==> ', config.itemStyle, response.request.url)
  console.log('%c method ==> ', config.itemStyle, response.request.method)
  console.log('%c body ==> ', config.itemStyle, response.request.body)
  console.log('%c hearders ==> ', config.itemStyle, response.request.headers)
  console.log('%c error msg ==> ', config.itemStyle, msg)
  console.groupEnd()
}
