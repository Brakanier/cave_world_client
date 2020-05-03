import { build } from "@/plugins/api/game";

export default {
  buildWoodStore({ commit, state }) {
    if (state.data.wood >= 30 && state.data.stone >= 30)
      build("wood_store").then(r => {
        commit("add", ['wood', -30]);
        commit("add", ['stone', -30]);
        commit("add", ['wood_store', 1]);
      });
  },
  buildHut({ commit, state }) {
    if (state.data.wood >= 10)
      build("hut").then(r => {
        commit("add", ['wood', -10]);
        commit("add", ['hut', 1]);
        commit("add", ['citizens_max', 1]);
      });
  },
  buildWoodWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('wood_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['wood_work', 1])
      })
      
    }
  }

};
