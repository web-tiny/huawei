// import checkTyped from '../../lib/typed'

export default {
  state: {
    timeResult: '请选择用车时间',
    isShow: false
  },
  mutations: {
    SET_RESULT: (state, text) => {
      state.timeResult = text
    },
    SET_TIME_PICK_IS_SHOW: (state, isShow) => {
      state.isShow = isShow
    }
  },
  actions: {
    setResult: (context, text) => {
      context.commit('SET_RESULT', text)
    },
    setTimePickIsShow: (context, isShow) => {
      context.commit('SET_TIME_PICK_IS_SHOW', isShow)
    }
  }
}
