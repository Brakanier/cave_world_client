<template>
  <v-card flat>
    <button-tabs v-model="tab" :items="items"></button-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item value="war">
          <v-row class="justify-center">
            <div>
              <div>Воины - {{ warrior_inwork }}</div>
              <div>Лучники - {{ archer_inwork }}</div>
              <div>Боевые маги - {{ warlock_inwork }}</div>
            </div>
          </v-row>
          <v-list three-line class="list-margin">
            <enemy-list-item
              v-for="enemy in found_enemies"
              :key="enemy.user__id"
              :terrain="enemy.terrain"
              :nickname="enemy.user__nickname"
              :attack="() => attack(enemy.user__id)"
            ></enemy-list-item>
          </v-list>
        </v-tab-item>
        <v-tab-item value="battles">
          <battle-history />
        </v-tab-item>
      </v-tabs-items>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import EnemyListItem from "@/components/EnemyListItem";
import ButtonTabs from "@/components/ButtonTabs";
import BattleHistory from '@/components/battle/BattleHistory'
export default {
  components: {
    EnemyListItem,
    ButtonTabs,
    BattleHistory
  },
  data() {
    return {
      tab: "war",
      items: [
        {
          name: "Война",
          tab: "war"
        },
        {
          name: "Сражения",
          tab: "battles"
        }
      ]
    };
  },
  created() {
    if (!this.$store.state.found_enemies) {
      this.$store.dispatch("findEnemies");
    }
  },
  computed: {
    ...mapState({
      found_enemies: state => state.game.found_enemies,
      warrior_inwork: state => state.game.data.warrior_inwork,
      archer_inwork: state => state.game.data.archer_inwork,
      warlock_inwork: state => state.game.data.warlock_inwork
    })
  },
  methods: {
    ...mapActions(["findEnemies", "attack"])
  }
};
</script>

<style scoped>

</style>
