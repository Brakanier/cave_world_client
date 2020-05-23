export default {
  setFoundEnemies(state, enemies) {
    state.found_enemies = enemies;
  },
  setBattles(state, battles) {
    state.battles = battles;
  },
  setLastAttack(state, attack) {
    state.lastAttack = attack
  },
  onAttack(state, data) {
    state.lastOnAttack = data;
  },
  setIsOnAttack(state, is) {
    state.isOnAttack = is;
  },
};
