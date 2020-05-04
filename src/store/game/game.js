import { getData, extract, build } from "@/plugins/api/game";
import builds_state from "./states/builds";
import store_state from "./states/store";
import citizens_state from "./states/citizens";
import war_state from './states/war'

import war_mutations from './mutations/war'

import store_actions from "./actions/store"
import builds_actions from "./actions/builds"
import citizens_actions from "./actions/citizens"
import war_actions from "./actions/war"

export default {
  state: {
    data: {
      level: 0,
      new_level: false,
      energy: 0,
      ...citizens_state,
      ...store_state,
      ...builds_state
    },
    ...war_state
  },
  mutations: {
    ...war_mutations,
    add(state, [target, amount]) {
      state.data[target] += amount
    },
    updateState(state, newData) {
      state.data = { ...state.data, ...newData };
      console.log(state.data.wood)
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
    ...store_actions,
    ...builds_actions,
    ...citizens_actions,
    ...war_actions
  },
  modules: {}
};
