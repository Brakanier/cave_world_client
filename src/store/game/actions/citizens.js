import { citizen } from "@/plugins/api/game";
import connect from "@/plugins/connect"

export default {
  citizen({ commit, state }, [target, amount]) {
    if (
      amount > 0 &&
      state.data.citizens_free >= amount &&
      state.data[`${target}_inwork`] + amount <= state.data[`${target}_work`]
    ) {
      connect.send({"action": `${target}_inwork`, 'amount': amount}).then(r => {
        commit("add", ["citizens_free", -amount]);
        commit("add", [`${target}_inwork`, amount]);
      });
    } else if (amount < 0 && state.data[`${target}_inwork`] + amount >= 0) {
      connect.send({"action": `${target}_inwork`, 'amount': amount}).then(r => {
        commit("add", ["citizens_free", -amount]);
        commit("add", [`${target}_inwork`, amount]);
      });
    }
  },
  citizen_warrior({ commit, state }, amount) {
    if (
      amount > 0 &&
      state.data.citizens_free >= amount &&
      state.data.warrior_inwork + amount <= state.data.warrior_work * 5
    ) {
      connect.send({"action": `warrior_inwork`, 'amount': amount}).then(r => {
        commit("add", ["citizens_free", -amount]);
        commit("add", ["warrior_inwork", amount]);
      });
    } else if (amount < 0 && state.data.warrior_inwork + amount >= 0) {
      connect.send({"action": `warrior_inwork`, 'amount': amount}).then(r => {
        commit("add", ["citizens_free", -amount]);
        commit("add", ["warrior_inwork", amount]);
      });
    }
  },
  // citizen_archer({ commit, state }, amount) {
  //   if (
  //     amount > 0 &&
  //     state.data.citizens_free >= amount &&
  //     state.data.archer_inwork + amount <= state.data.archer_work * 3
  //   ) {
  //     citizen("archer_inwork", amount).then(r => {
  //       commit("add", ["citizens_free", -amount]);
  //       commit("add", ["archer_inwork", amount]);
  //     });
  //   } else if (amount < 0 && state.data.archer_inwork + amount >= 0) {
  //     citizen("archer_inwork", amount).then(r => {
  //       commit("add", ["citizens_free", -amount]);
  //       commit("add", ["archer_inwork", amount]);
  //     });
  //   }
  // },
  // citizen_warlock({ commit, state }, amount) {
  //   if (
  //     amount > 0 &&
  //     state.data.citizens_free >= amount &&
  //     state.data.warlock_inwork + amount <= state.data.warlock_work * 1
  //   ) {
  //     citizen("warlock_inwork", amount).then(r => {
  //       commit("add", ["citizens_free", -amount]);
  //       commit("add", ["warlock_inwork", amount]);
  //     });
  //   } else if (amount < 0 && state.data.warlock_inwork + amount >= 0) {
  //     citizen("warlock_inwork", amount).then(r => {
  //       commit("add", ["citizens_free", -amount]);
  //       commit("add", ["warlock_inwork", amount]);
  //     });
  //   }
  // }
};
