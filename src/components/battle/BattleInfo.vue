<template>
        <div>
          <v-row>
              <div class="col-12 py-1 text-center">
            Информация
          </div>
            <div class="col-6"></div>
            <div class="col-3 py-1 text-center">
              Потери
            </div>
            <div class="col-3 py-1 text-center">
              Убито
            </div>
            <div class="col-6 py-0">Воины:</div>
            <div class="col-3 py-0 text-center">{{ died("warrior") }}</div>
            <div class="col-3 py-0 text-center">{{ kills("warrior") }}</div>
            <div class="col-6 py-0">Лучники:</div>
            <div class="col-3 py-0 text-center">{{ died("archer") }}</div>
            <div class="col-3 py-0 text-center">{{ kills("archer") }}</div>
            <div class="col-6 py-0">Боевые маги:</div>
            <div class="col-3 py-0 text-center">{{ died("warlock") }}</div>
            <div class="col-3 py-0 text-center">{{ kills("warlock") }}</div>
          </v-row>
          <div v-if="battle.win && attack && battle.reward" class="col-12 py-1 text-center">
            Награда
          </div>
          <v-row v-if="battle.win && attack">
            <info-item
              v-if="battle.reward.wood"
              name="Дерево"
              icon="mdi-pine-tree"
              :amount="battle.reward.wood"
            />
            <info-item
              v-if="battle.reward.stone"
              name="Камень"
              icon="mdi-collage"
              :amount="battle.reward.stone"
            />
            <info-item
              v-if="battle.reward.iron"
              name="Металл"
              icon="mdi-gold"
              :amount="battle.reward.iron"
            />
            <info-item
              v-if="battle.reward.orb"
              name="Сферы"
              icon="mdi-crystal-ball"
              :amount="battle.reward.orb"
            />

            <info-item
              v-if="battle.reward.trophy"
              name="Трофеи"
              icon="mdi-trophy"
              :amount="battle.reward.trophy"
            />
            <info-item
              v-if="battle.reward.terrain"
              name="Земли"
              icon="mdi-image-filter-hdr"
              :amount="battle.reward.terrain"
            />
            <info-item
              v-if="battle.reward.exp"
              name="Опыт"
              icon="mdi-creation"
              :amount="battle.reward.exp"
            />
          </v-row>
          </div>
</template>

<script>
import InfoItem from "@/components/InfoItem";
import {mapState} from "vuex"
export default {
    components: {
        InfoItem
    },
props: {
    battle: Object,
    attack: Boolean
},
computed: {
    ...mapState({
      vk_id: state => state.app.vk_id
    }),
},
methods: {
    kills(type) {
      let kill = !this.attack
        ? this.battle.data[`attack_${type}_die`]
        : this.battle.data[`defender_${type}_die`]
      let was = !this.attack
        ? this.battle.data[`attack_${type}`]
        : this.battle.data[`defender_${type}`]
      return kill + ' / ' + was
    },
    died(type) {
      let died = this.attack
        ? this.battle.data[`attack_${type}_die`]
        : this.battle.data[`defender_${type}_die`]
      let was = this.attack
        ? this.battle.data[`attack_${type}`]
        : this.battle.data[`defender_${type}`]
      return died + ' / ' + was
    }
}
}
</script>

<style>

</style>