import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import home from './modules/home'
import position from './modules/position'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { home, position }, getters
})

export default store
