export default {
  state: {
    type: 0
  },
  mutations: {
    SET_TYPE: (state, type) => {
      state.type = type
    }
  },
  actions: {
    setType: (context, type) => {
      context.commit('SET_TYPE', type)
    }
  }
}
