import checkTyped from '../../lib/typed'

export default {
  state: {
    position: {},
    currLocation: '正在获取当前定位'
  },
  mutations: {
    SET_POSITION: (state, position) => {
      state.position = position
    },
    SET_CURR_LOCATION: (state, address) => {
      typeof address === 'string' && (state.currLocation = address)
    }
  },
  actions: {
    setPosition: (context, position) => {
      const model = {
        lat: 'number',
        lng: 'number',
        address: 'string',
        city: 'string',
        district: 'string'
      }

      if (checkTyped(model, position)) {
        context.commit('SET_POSITION', position)
        context.commit('SET_CURR_LOCATION', position.address)
      } else {
        console.error('setPosition typed error')
      }
    },
    setCurrLocation: (context, address) => {
      context.commit('SET_CURR_LOCATION', address)
    }
  }
}
