import {getData, extract} from '@/plugins/api/game'

export default {
  state: {
    wood: 0,
    stone: 0,
    energy: 1000
  },
  mutations: {
    addWood(state, amount) {
      state.wood += amount;
    },
    addStone(state, amount) {
      state.stone += amount;
    },
    setWood(state, wood) {
      state.wood = wood;
    },
    setStone(state, stone) {
      state.stone = stone;
    },
    removeEnergy(state, amount) {
      state.energy -= amount
    },
    updateState(state, newState) {
      state.wood = newState.wood
      state.stone = newState.stone
      state.energy = newState.energy
    }
  },
  actions: {
    extractWood({ commit, state }) {
      if (state.energy >= 1) {
        extract('wood').then((r) => {
          commit('removeEnergy', 1)
          console.log('Extract Wood', r.data)
          // commit('updateState', r.data)
          commit('addWood', 1)
        })
      }
      
    },
    extractStone({ commit, state }) {
      if (state.energy >= 1) {
        extract('stone').then((r) => {
          commit('removeEnergy', 1)
          console.log('Extract Stone', r.data)
          // commit('updateState', r.data)
          commit('addStone', 1)
        })
      }
    },
    updateData({commit}) {
      console.log('UpdateData')
      getData().then((r) => {
        console.log(r.data)
        commit('updateState', r.data)
      })
    }
  },
  modules: {}
};
