import { extract } from "@/plugins/api/game";
import connect from "@/plugins/connect"

export default {
  extract({ commit, state }, target) {
    if (state.data.energy >= 1 && state.data[`${target}_max`] >= state.data[target] + 1) {
      connect.send({"action": target}).then(r => {
        commit("add", ["energy", -1]);
        commit("add", [target, 1]);
        commit("add", ['exp', 1]);
        commit("add", ['current_exp', 1]);
      })
    }
  }
};
