export default {
  namespaced: true,
  state: {
    token: "",
    updateDataInterval: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUpdateDataInterval(state, id) {
      state.updateDataInterval = id
    }
  },
  actions: {},
  modules: {}
};
