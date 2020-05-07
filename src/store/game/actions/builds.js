import { build } from "@/plugins/api/game";

export default {
  buildHut({ commit, state }) {
    if (state.data.wood >= 10)
      build("hut").then(r => {
        commit("add", ['wood', -10]);
        commit("add", ['hut', 1]);
        commit("add", ['citizens_max', 1]);
        commit("add", ['citizens', 1])
        commit("add", ['terrain_free', -1]);
      });
  },
  buildHouse({ commit, state }) {
    if (state.data.wood >= 15 && state.data.stone >= 15)
      build("house").then(r => {
        commit("add", ['wood', -15]);
        commit("add", ['stone', -15]);
        commit("add", ['house', 1]);
        commit("add", ['citizens_max', 5]);
        commit("add", ['citizens', 5])
        commit("add", ['terrain_free', -1])
      });
  },
  buildMansion({ commit, state }) {
    if (state.data.wood >= 30 && state.data.stone >= 30)
      build("mansion").then(r => {
        commit("add", ['wood', -30]);
        commit("add", ['stone', -30]);
        commit("add", ['mansion', 1]);
        commit("add", ['citizens_max', 10]);
        commit("add", ['citizens', 10])
        commit("add", ['terrain_free', -1])
      });
  },
  buildWoodStore({ commit, state }) {
    if (state.data.wood >= 30 && state.data.stone >= 30)
      build("wood_store").then(r => {
        commit("add", ['wood', -30]);
        commit("add", ['stone', -30]);
        commit("add", ['wood_store', 1]);
        commit("add", ['wood_max', 100]);
        commit("add", ['terrain_free', -1])
      });
  },
  buildStoneStore({ commit, state }) {
    if (state.data.wood >= 30 && state.data.stone >= 30)
      build("stone_store").then(r => {
        commit("add", ['wood', -30]);
        commit("add", ['stone', -30]);
        commit("add", ['stone_store', 1]);
        commit("add", ['stone_max', 100]);
        commit("add", ['terrain_free', -1])
      });
  },
  
  buildWoodWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('wood_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['wood_work', 1])
        commit("add", ['terrain_free', -1])
      })
      
    }
  },
  buildStoneWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('stone_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['stone_work', 1])
        commit("add", ['terrain_free', -1])
      })
      
    }
  },
  buildOreWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('ore_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['ore_work', 1])
        commit("add", ['terrain_free', -1])
      })
      
    }
  },
  buildSmithWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('smith_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['smith_work', 1])
        commit("add", ['terrain_free', -1])
      })
      
    }
  },
  buildWizardWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('wizard_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['wizard_work', 1])
        commit("add", ['terrain_free', -1])
      })
      
    }
  },
  buildAlchemistWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('alchemist_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['alchemist_work', 1])
        commit("add", ['terrain_free', -1])
      })
    }
  },
  buildWarriorWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('warrior_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['warrior_work', 1])
        commit("add", ['terrain_free', -1])
      })
    }
  },
  buildArcherWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('archer_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['archer_work', 1])
        commit("add", ['terrain_free', -1])
      })
    }
  },
  buildWarlockWork({commit, state}) {
    if (state.data.wood >= 10 && state.data.stone >= 10) {
      build('warlock_work').then(r => {
        commit('add', ['wood', -10])
        commit('add', ['stone', -10])
        commit('add', ['warlock_work', 1])
        commit("add", ['terrain_free', -1])
      })
    }
  }

};
