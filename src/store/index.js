import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import game from './game/game'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    app,
    game
  }
})
