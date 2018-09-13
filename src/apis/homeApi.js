import request from '../lib/request'

export function companyList (postData) {
  postData = postData || {}
  return request('ctcActivity/getCompanyList', 'post', postData)
}

export function getCode (postData) {
  return request('send/getCode', 'post', postData)
}

export function vaildCode (postData) {
  return request('ctcActivity/vaildCode', 'post', postData)
}
