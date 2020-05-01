import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import store from './store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    store
  }
})
