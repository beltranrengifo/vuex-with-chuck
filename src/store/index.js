import Vue from 'vue'
import Vuex from 'vuex'
import { joke, ui } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    joke,
    ui,
  },
})
