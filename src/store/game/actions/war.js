import { find_enemies, attack } from "@/plugins/api/game";

export default {
    findEnemies({ commit }) {
        find_enemies().then(r => {
            console.log('Find Enemies')
            console.log(r.data)
            commit('setFoundEnemies', r.data)
      });
    },
    attack({commit}, id) {
        attack(id).then(r => {
            console.log('Attack')
            console.log(r.data)
        })
    }
};
