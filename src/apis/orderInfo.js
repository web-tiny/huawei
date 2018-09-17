import request from '../lib/request'

// 取消订单接口
export function apiCancelOrder (postData) {
  postData = postData || {}
  return request('ctcActivity/getCompanyList', 'post', postData)
}

// 订单信息接口
export function apiOrderInfo (postData) {
  postData = postData || {}
  return request('ctcActivity/getCompanyList', 'post', postData)
}

// 查询订单状态
export function apiOrderStatus (postData) {
  postData = postData || {}
  return request('ctcActivity/getCompanyList', 'post', postData)
}

// 提交投诉
export function apiSubmitComplain (postData) {
  postData = postData || {}
  return request('ctcActivity/getCompanyList', 'post', postData)
}
