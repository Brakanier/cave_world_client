import { getData, extract, build } from "@/plugins/api/game";
import builds_state from "./states/builds";
import store_state from "./states/store";
import citizens_state from "./states/citizens";

import store_actions from "./actions/store"
import builds_actions from "./actions/builds"
import citizens_actions from "./actions/citizens"

export default {
  state: {
    data: {
      energy: 0,

      ...citizens_state,
      ...store_state,
      ...builds_state
    }
  },
  mutations: {
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
    ...citizens_actions
  },
  modules: {}
};
