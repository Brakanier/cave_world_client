import store from "@/store";

const onmessage = ({ data }) => {
  console.log(data);
  switch (data.type) {
    case "sync":
      store.commit("updateState", data.data);
      break;
    case "attack":
      store.commit("setLastAttack", data.data);
      store.commit("setIsLastAttack", true);
      store.dispatch("updateBattles");
      store.dispatch("addAttackReward", data.data.reward);
      store.dispatch("findEnemies");
      break;
    case "onattack":
      store.commit("onAttack", data.data);
      store.dispatch("updateBattles");
      break;
    case "battles":
      store.commit("setBattles", data.data);
      break;
    case "enemies":
      store.commit("setFoundEnemies", data.data);
      break;
    case "levelup":
      store.commit("setLevelUpData", data.data);
      store.commit("setIsLevelUp", true);
      break;
  }
};

export default onmessage;
