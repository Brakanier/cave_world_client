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
              :trophy="enemy.trophy"
              :level="enemy.level"
              :terrain="enemy.terrain"
              :nickname="enemy.user__nickname"
              :attack="() => {attack(enemy.user__id); toggleLastAttack()}"
            ></enemy-list-item>
          </v-list>
        </v-tab-item>
        <v-tab-item value="battles">
          <battle-history />
        </v-tab-item>
      </v-tabs-items>
      <v-dialog v-model="openLastAttack">
      <v-card v-if="lastAttack">
        <v-card-title class="headline">{{lastAttack.win ? 'Победа!' : 'Поражение...'}}</v-card-title>
        
        <v-card-text class="py-0">
          <v-row>
            <info-item v-if="lastAttack.reward.wood"
              name="Дерево"
              icon="mdi-pine-tree"
              :amount="lastAttack.reward.wood"
            />
            <info-item v-if="lastAttack.reward.stone"
              name="Камень"
              icon="mdi-collage"
              :amount="lastAttack.reward.stone"
            />
            <info-item v-if="lastAttack.reward.iron"
              name="Металл"
              icon="mdi-gold"
              :amount="lastAttack.reward.iron"
            />
            <info-item v-if="lastAttack.reward.orb"
              name="Сферы"
              icon="mdi-crystal-ball"
              :amount="lastAttack.reward.orb"
            />

            <info-item v-if="lastAttack.reward.wood"
              name="Трофеи"
              icon="mdi-trophy"
              :amount="lastAttack.reward.trophy"
            />
            <info-item v-if="lastAttack.reward.terrain"
              name="Земли"
              icon="mdi-image-filter-hdr"
              :amount="lastAttack.reward.terrain"
            />
            <info-item v-if="lastAttack.reward.exp"
              name="Опыт"
              icon="mdi-creation"
              :amount="lastAttack.reward.exp"
            />
          </v-row>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="toggleLastAttack">Ок</v-btn>
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
import BattleHistory from '@/components/battle/BattleHistory'
import InfoItem from "@/components/InfoItem";
export default {
  components: {
    EnemyListItem,
    ButtonTabs,
    BattleHistory,
    InfoItem
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
      ],
      openLastAttack: false
    };
  },
  created() {
    if (!this.$store.state.found_enemies) {
      this.findEnemies()
    }
    this.updateBattles()
  },
  computed: {
    ...mapState({
      found_enemies: state => state.game.found_enemies,
      warrior_inwork: state => state.game.data.warrior_inwork,
      archer_inwork: state => state.game.data.archer_inwork,
      warlock_inwork: state => state.game.data.warlock_inwork,
      lastAttack: state => state.game.lastAttack
    }),
  },
  methods: {
    ...mapActions(["findEnemies", "attack", 'updateBattles']),
    toggleLastAttack() {
      this.openLastAttack = !this.openLastAttack
    }
  }
};
</script>

<style>
.nickname {
  font-size: 18px;
}
</style>
