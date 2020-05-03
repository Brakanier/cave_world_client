import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import game from './game/game'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    app,
    game
  }
})
