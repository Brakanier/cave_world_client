import { build } from "@/plugins/api/game";
import connect from "@/plugins/connect"

export default {
  buildHut({ commit, state }) {
    let wood = 10 + 10 * state.data.hut
    if (state.data.wood >= wood)
      connect.send({"action": 'hut'}).then(r => {
        commit("add", ['wood', -wood]);
        commit("add", ['hut', 1]);
        commit("add", ['citizens_max', 1]);
        commit("add", ['citizens_free', 1])
        commit("add", ['citizens', 1])
        commit("add", ['terrain_free', -1]);
      });
  },
  buildHouse({ commit, state }) {
    let wood = 15 + 15 * state.data.house
    let stone = 15 + 15 * state.data.house
    if (state.data.wood >= wood && state.data.stone >= stone)
    connect.send({"action": 'house'}).then(r => {
        commit("add", ['wood', -wood]);
        commit("add", ['stone', -stone]);
        commit("add", ['house', 1]);
        commit("add", ['citizens_max', 5]);
        commit("add", ['citizens_free', 5])
        commit("add", ['citizens', 5])
        commit("add", ['terrain_free', -1])
      });
  },
  buildMansion({ commit, state }) {
    let wood = 30 + 30 * state.data.mansion
    let stone = 30 + 30 * state.data.mansion
    if (state.data.wood >= wood && state.data.stone >= stone)
    connect.send({"action": 'mansion'}).then(r => {
        commit("add", ['wood', -wood]);
        commit("add", ['stone', -stone]);
        commit("add", ['mansion', 1]);
        commit("add", ['citizens_max', 10]);
        commit("add", ['citizens_free', 10])
        commit("add", ['citizens', 10])
        commit("add", ['terrain_free', -1])
      });
  },
  buildWoodStore({ commit, state }) {
    let wood = 30 + 30 * state.data.wood_store
    let stone = 30 + 30 * state.data.wood_store
    if (state.data.wood >= wood && state.data.stone >= stone)
    connect.send({"action": 'wood_store'}).then(r => {
        commit("add", ['wood', -wood]);
        commit("add", ['stone', -stone]);
        commit("add", ['wood_store', 1]);
        commit("add", ['wood_max', 100]);
        commit("add", ['terrain_free', -1])
      });
  },
  buildStoneStore({ commit, state }) {
    let wood = 30 + 30 * state.data.stone_store
    let stone = 30 + 30 * state.data.stone_store
    if (state.data.wood >= wood && state.data.stone >= stone)
    connect.send({"action": 'stone_store'}).then(r => {
        commit("add", ['wood', -wood]);
        commit("add", ['stone', -stone]);
        commit("add", ['stone_store', 1]);
        commit("add", ['stone_max', 100]);
        commit("add", ['terrain_free', -1])
      });
  },
  
  buildWoodWork({commit, state}) {
    let wood = 10 + 10 * state.data.wood_work
    let stone = 10 + 10 * state.data.wood_work
    if (state.data.wood >= wood && state.data.stone >= stone) {
      connect.send({"action": 'wood_work'}).then(r => {
        commit('add', ['wood', -wood])
        commit('add', ['stone', -stone])
        commit('add', ['wood_work', 1])
        commit("add", ['terrain_free', -1])
      })
      
    }
  },
  buildStoneWork({commit, state}) {
    let wood = 10 + 10 * state.data.stone_work
    let stone = 10 + 10 * state.data.stone_work
    if (state.data.wood >= wood && state.data.stone >= stone) {
      connect.send({"action": 'stone_work'}).then(r => {
        commit('add', ['wood', -wood])
        commit('add', ['stone', -stone])
        commit('add', ['stone_work', 1])
        commit("add", ['terrain_free', -1])
      })
      
    }
  },
  // buildOreWork({commit, state}) {
  //   let wood = 10 + 10 * state.data.ore_work
  //   let stone = 10 + 10 * state.data.ore_work
  //   if (state.data.wood >= wood && state.data.stone >= stone) {
  //     build('ore_work').then(r => {
  //       commit('add', ['wood', -wood])
  //       commit('add', ['stone', -stone])
  //       commit('add', ['ore_work', 1])
  //       commit("add", ['terrain_free', -1])
  //     })
      
  //   }
  // },
  buildSmithWork({commit, state}) {
    let wood = 10 + 10 * state.data.smith_work
    let stone = 10 + 10 * state.data.smith_work
    let ore = 10 + 10 * state.data.smith_work
    if (state.data.wood >= wood && state.data.stone >= stone && state.data.ore >= ore) {
      connect.send({"action": 'smith_work'}).then(r => {
        commit('add', ['wood', -wood])
        commit('add', ['stone', -stone])
        commit('add', ['ore', -ore])
        commit('add', ['smith_work', 1])
        commit("add", ['terrain_free', -1])
      })
      
    }
  },
  // buildWizardWork({commit, state}) {
  //   let wood = 10 + 10 * state.data.wizard_work
  //   let stone = 10 + 10 * state.data.wizard_work
  //   let ore = 10 + 10 * state.data.wizard_work
  //   let iron = 10 + 10 * state.data.wizard_work
  //   if (state.data.wood >= wood && state.data.stone >= stone && state.data.ore >= ore && state.data.iron >= iron) {
  //     build('wizard_work').then(r => {
  //       commit('add', ['wood', -wood])
  //       commit('add', ['stone', -stone])
  //       commit('add', ['ore', -ore])
  //       commit('add', ['iron', -iron])
  //       commit('add', ['wizard_work', 1])
  //       commit("add", ['terrain_free', -1])
  //     })
      
  //   }
  // },
  buildAlchemistWork({commit, state}) {
    let wood = 10 + 10 * state.data.alchemist_work
    let stone = 10 + 10 * state.data.alchemist_work
    let ore = 10 + 10 * state.data.alchemist_work
    let iron = 10 + 10 * state.data.alchemist_work
    let orb = 10 + 10 * state.data.alchemist_work
    if (state.data.wood >= wood && state.data.stone >= stone && state.data.ore >= ore && state.data.iron >= iron && state.data.orb >= orb) {
      connect.send({"action": 'alchemist_work'}).then(r => {
        commit('add', ['wood', -wood])
        commit('add', ['stone', -stone])
        commit('add', ['ore', -ore])
        commit('add', ['iron', -iron])
        commit('add', ['orb', -orb])
        commit('add', ['alchemist_work', 1])
        commit("add", ['terrain_free', -1])
      })
    }
  },
  buildWarriorWork({commit, state}) {
    let wood = 10 + 10 * state.data.warrior_work
    let stone = 10 + 10 * state.data.warrior_work
    let iron = 10 + 10 * state.data.warrior_work
    if (state.data.wood >= wood && state.data.stone >= stone && state.data.iron >= iron) {
      connect.send({"action": 'warrior_work'}).then(r => {
        commit('add', ['wood', -wood])
        commit('add', ['stone', -stone])
        commit('add', ['iron', -iron])
        commit('add', ['warrior_work', 1])
        commit("add", ['warrior_max', 5])
        commit("add", ['terrain_free', -1])
      })
    }
  },
  // buildArcherWork({commit, state}) {
  //   let wood = 20 + 20 * state.data.archer_work
  //   let stone = 20 + 20 * state.data.archer_work
  //   let iron = 10 + 10 * state.data.archer_work
  //   if (state.data.wood >= wood && state.data.stone >= stone && state.data.iron >= iron) {
  //     build('archer_work').then(r => {
  //       commit('add', ['wood', -wood])
  //       commit('add', ['stone', -stone])
  //       commit('add', ['iron', -iron])
  //       commit('add', ['archer_work', 1])
  //       commit("add", ['archer_max', 3])
  //       commit("add", ['terrain_free', -1])
  //     })
  //   }
  // },
  // buildWarlockWork({commit, state}) {
  //   let wood = 30 + 30 * state.data.warlock_work
  //   let stone = 30 + 30 * state.data.warlock_work
  //   let iron = 10 + 10 * state.data.warlock_work
  //   let orb = 10 + 10 * state.data.warlock_work
  //   if (state.data.wood >= wood && state.data.stone >= stone && state.data.iron >= iron && state.data.orb >= orb) {
  //     build('warlock_work').then(r => {
  //       commit('add', ['wood', -wood])
  //       commit('add', ['stone', -stone])
  //       commit('add', ['iron', -iron])
  //       commit('add', ['orb', -orb])
  //       commit('add', ['warlock_work', 1])
  //       commit("add", ['warlock_max', 1])
  //       commit("add", ['terrain_free', -1])
  //     })
  //   }
  // }

};
