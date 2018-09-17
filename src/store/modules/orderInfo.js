import { apiCancelOrder } from '../../apis/orderInfo'

const state = {
  // 当日用户取消订单的次数
  cancelOrderNum: 0
}

const mutations = {
  // 存储用户取消订单次数
  SET_CANCELORDER_NUM: (state, val) => {
    state.cancelOrderNum = val
  }
}

const actions = {
  // 取消订单
  cancelOrder ({ commit }, orderId) {
    const success = apiData => { commit('SET_CANCELORDER_NUM', apiData) }
    apiGetCancelOrderNum(success, orderId)
  }
}

function apiGetCancelOrderNum (success, orderId) {
  console.log(orderId)
  const responseData = apiCancelOrder(orderId)
  let apiData = 10
  let num = responseData.num
  if (num) {
    apiData = num
  }
  window.alert('今日您已取消' + apiData + '次,超过5次当日不可下单')
  console.log('取消订单数据', responseData)
  success(apiData)
}

export default {
  state,
  mutations,
  actions
}
