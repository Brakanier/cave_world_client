import { citizen } from "@/plugins/api/game";

export default {
  citizen({ commit, state }, [target, amount]) {
    if (
      amount > 0 &&
      state.data.citizens_free >= amount &&
      state.data[`${target}_inwork`] + amount <= state.data[`${target}_work`]
    ) {
      citizen(`${target}_inwork`, amount).then(r => {
        commit("add", ["citizens_free", -amount]);
        commit("add", ["wood_inwork", amount]);
      });
    } else if (amount < 0 && state.data[`${target}_inwork`] + amount >= 0) {
      citizen(`${target}_inwork`, amount).then(r => {
        commit("add", ["citizens_free", -amount]);
        commit("add", ["wood_inwork", amount]);
      });
    }
  }
};
