import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import home from './modules/home'
import position from './modules/position'
import timePick from './modules/timePick'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { home, position, timePick }, getters
})

export default store
