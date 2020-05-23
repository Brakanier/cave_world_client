import { setNickname } from "@/plugins/api/index";
export default {
  namespaced: true,
  state: {
    token: "",
    nickname: "",
    vk_id: null,
    // updateDataInterval: null,
    incrementDataInterval: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setNickname(state, nickname) {
      state.nickname = nickname
    },
    setVkId(state, vk_id) {
      state.vk_id = vk_id
    },
    // setUpdateDataInterval(state, id) {
    //   state.updateDataInterval = id
    // },
    setIncrementDataInterval(state, id) {
      state.incrementDataInterval = id
    }
  },
  actions: {
    newNickname({commit}, nickname) {
      setNickname(nickname).then(r => {
        commit('setNickname', r.data)
      })
    }
  },
  modules: {}
};
