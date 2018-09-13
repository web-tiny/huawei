// import RequestBody from './requestBody'
import { responseStatus, errorStatus } from './responseHandle'
const fly = require('flyio')

fly.config = {
  baseURL: 'dzcx_tg/',
  withCredentials: true
}

fly.interceptors.request.use(request => {
  const _storeData = window.localStorage.getItem('userInfo')
  request.headers.Authorization = _storeData ? _storeData.token : ''
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    return responseStatus(response) && responseStatus(response)
  },
  err => {
    // 发生网络错误后会走到这里
    errorStatus(err.status)
  }
)

export default function (url, method, data) {
  return fly.request(url, data, {
    method: method
  })
}
