import { extract } from "@/plugins/api/game";

export default {
  extract({ commit, state }, target) {
    if (state.data.energy >= 1) {
      extract(target).then(r => {
        console.log(`Extract ${target}`);
        commit("add", ["energy", -1]);
        commit("add", [target, 1]);
      });
    }
  }
};
