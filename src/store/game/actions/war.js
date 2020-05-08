import { find_enemies, attack, battles } from "@/plugins/api/game";

export default {
    findEnemies({ commit }) {
        find_enemies().then(r => {
            console.log('Find Enemies')
            console.log(r.data)
            commit('setFoundEnemies', r.data)
      });
    },
    attack({commit, dispatch}, id) {
        attack(id).then(r => {
            console.log('Attack')
            console.log(r.data)
            commit('setLastAttack', r.data)
            dispatch('updateBattles')
            commit('add', ['wood', r.data.reward.wood])
            commit('add', ['stone', r.data.reward.stone])
            commit('add', ['orb', r.data.reward.orb])
            commit('add', ['iron', r.data.reward.iron])
            commit('add', ['trophy', r.data.reward.trophy])
            commit('add', ['terrain', r.data.reward.terrain])
            commit('add', ['exp', r.data.reward.exp])
            commit('add', ['current_exp', r.data.reward.exp])
        })
    },
    updateBattles({commit}) {
        battles().then(r => {
            commit('setBattles', r.data)
        })
    }
};
