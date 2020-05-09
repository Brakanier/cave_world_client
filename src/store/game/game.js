import { getData, extract, build, levelUp } from "@/plugins/api/game";
import builds_state from "./states/builds";
import store_state from "./states/store";
import citizens_state from "./states/citizens";
import war_state from './states/war'

import builds_getters from './getters/builds'

import war_mutations from './mutations/war'

import store_actions from "./actions/store"
import builds_actions from "./actions/builds"
import citizens_actions from "./actions/citizens"
import war_actions from "./actions/war"

export default {
  state: {
    data: {
      level: 0,
      exp: 0,
      current_exp: 0,
      need_exp: 0,
      energy: 0,
      ...citizens_state,
      ...store_state,
      ...builds_state
    },
    ...war_state
  },
  getters: {
    ...builds_getters
  },
  mutations: {
    ...war_mutations,
    add(state, [target, amount]) {
      if (target == 'wood' || target == 'stone') {
        state.data[target] = Math.min(state.data[target] + amount, state.data[`${target}_max`])
      } else {
        state.data[target] += amount
      }
      
    },
    updateState(state, newData) {
      state.data = { ...state.data, ...newData };
    },
  },
  actions: {
    updateData({ commit }) {
      console.log("UpdateData");
      getData().then(r => {
        console.log(r.data);
        commit("updateState", r.data);
      });
    },
    incrementData({ commit, state }) {
      console.log('inc')
      commit('add', ['wood', state.data.wood_inwork * (0.2 / 60)])
      commit('add', ['stone', state.data.stone_inwork * (0.2 / 60)])
      let iron = state.data.ore >= 1 ? state.data.smith_inwork * (0.1 / 60) : 0
      commit('add', ['ore', state.data.ore_inwork * (0.2 / 60) - iron])
      commit('add', ['iron', iron])
      commit('add', ['orb', state.data.wizard_inwork * (0.1 / 60)])
      commit('add', ['alchemy', state.data.alchemist_inwork * (0.1 / 60)])
    },
    levelUp() {
      return levelUp()
    },
    ...store_actions,
    ...builds_actions,
    ...citizens_actions,
    ...war_actions
  },
  modules: {}
};
