import { find_enemies, attack, battles } from "@/plugins/api/game";
import connect from "@/plugins/connect";

export default {
    findEnemies() {
        connect.send({"action": 'find'})
    },
    attack({commit, dispatch}, id) {
        return new Promise((resolve, reject) => {
            attack(id).then(r => {
                console.log('Attack')
                console.log(r.data)
                commit('setLastAttack', r.data)
                dispatch('updateBattles')
                dispatch('addAttackReward', r.data.reward)
                dispatch('findEnemies')
                resolve(true)
            }).catch(() => {
                reject(false)
            })
        })
        
    },
    updateBattles() {
        connect.send({"action": 'battles'})
    },
    addAttackReward({commit}, reward) {
        commit('add', ['wood', reward.wood])
        commit('add', ['stone', reward.stone])
        commit('add', ['orb', reward.orb])
        commit('add', ['iron', reward.iron])
        commit('add', ['trophy', reward.trophy])
        commit('add', ['terrain', reward.terrain])
        commit('add', ['exp', reward.exp])
        commit('add', ['current_exp', reward.exp])
      }
};
