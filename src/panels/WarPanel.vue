<template>
  <v-card flat>
    <button-tabs v-model="tab" :items="items"></button-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="war">
        <v-row class="justify-center">
          <div class="col-8">
            <div class="text-center">Воины - {{ warrior_inwork }}</div>
            <div class="text-center">Лучники - {{ archer_inwork }}</div>
            <div class="text-center">Боевые маги - {{ warlock_inwork }}</div>
          </div>
          <div class="col-4">
            <v-btn height="50" min-width="40" class="pa-0" @click="findEnemies">
              <v-icon size="50">mdi-cached</v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-list three-line class="list-margin">
          <enemy-list-item
            v-for="enemy in found_enemies"
            :key="enemy.user__id"
            :vk_id="enemy.user__vk_id"
            :trophy="enemy.trophy"
            :level="enemy.level"
            :terrain="enemy.terrain"
            :nickname="enemy.user__nickname"
            :attack="
              () => {
                attack(enemy.user__id).then(() => {
                  toggleLastAttack()
                }).catch(() => {
                  findEnemies()
                });
              }
            "
          ></enemy-list-item>
        </v-list>
      </v-tab-item>
      <v-tab-item value="battles">
        <battle-history />
      </v-tab-item>
    </v-tabs-items>
    <v-dialog :value="isLastAttack" @input="(value) => setIsLastAttack(value)">
      <v-card v-if="lastAttack">
        <v-card-title class="headline">{{
          lastAttack.win ? "Победа!" : "Поражение..."
        }}</v-card-title>
        <v-card-text class="py-0">
          <battle-info :battle="lastAttack" :attack="true">

          </battle-info>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="() => setIsLastAttack(false)">Ок</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import EnemyListItem from "@/components/EnemyListItem";
import ButtonTabs from "@/components/ButtonTabs";
import BattleHistory from "@/components/battle/BattleHistory";
import InfoItem from "@/components/InfoItem";
import BattleInfo from "@/components/battle/BattleInfo"
export default {
  components: {
    EnemyListItem,
    ButtonTabs,
    BattleHistory,
    BattleInfo
    // InfoItem
  },
  data() {
    return {
      tab: "war",
      items: [
        {
          name: "Атака",
          tab: "war"
        },
        {
          name: "Сражения",
          tab: "battles"
        }
      ],
      openLastAttack: false
    };
  },
  created() {
    if (!this.$store.state.found_enemies) {
      this.findEnemies();
    }
    this.updateBattles();
  },
  computed: {
    ...mapState({
      found_enemies: state => state.game.found_enemies,
      warrior_inwork: state => state.game.data.warrior_inwork,
      archer_inwork: state => state.game.data.archer_inwork,
      warlock_inwork: state => state.game.data.warlock_inwork,
      lastAttack: state => state.game.lastAttack,
      isLastAttack: state => state.game.isLastAttack,
      vk_id: state => state.app.vk_id
    }),
    isAttack() {
      return this.lastAttack.attack__vk_id == this.vk_id;
    },
  },
  methods: {
    ...mapActions(["findEnemies", "attack", "updateBattles", "setIsLastAttack"]),
    toggleLastAttack() {
      this.openLastAttack = !this.openLastAttack;
    },
  }
};
</script>

<style>
.nickname {
  font-size: 18px;
}
</style>
