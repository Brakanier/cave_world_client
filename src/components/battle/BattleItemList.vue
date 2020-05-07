<template>
  <v-row v-on:click="expand = !expand" class="py-2 battle-list-item">
    <div class="col-12 text-center pa-0 title">
      {{ battle.win ? "Победа" : "Поражение" }}
    </div>
    <div class="col-8 py-0 d-flex justify-center align-center">
      <div v-if="vk_id == battle.attack__vk_id">
        <span class="title font-weight-bold">{{
          battle.defender__nickname
        }}</span>
        <div>
          Атака
        </div>
      </div>
      <div v-else>
        <span class="title font-weight-bold">{{
          battle.attack__nickname
        }}</span>
        <div>Защита</div>
      </div>
    </div>
    <div class="col-4 py-0 d-flex justify-center align-center">
      <v-btn icon>
        <v-icon size="40" v-if="!expand">mdi-chevron-down</v-icon>
        <v-icon size="40" v-else>mdi-chevron-up</v-icon>
      </v-btn>
    </div>

    <v-expand-transition>
      <v-card flat v-show="expand" class="col-12 py-0">
        <div v-if="battle.reward" class="col-12 py-0">
          <div class="col-12 py-1 text-center">
            Награда
          </div>
          <v-row class="pb-1">
            <info-item
              name="Трофеи"
              icon="mdi-trophy"
              :amount="battle.reward.trophy"
            />
            <info-item
              name="Земли"
              icon="mdi-image-filter-hdr"
              :amount="battle.reward.terrain"
            />
            <info-item
              name="Дерево"
              icon="mdi-pine-tree"
              :amount="battle.reward.wood"
            />
            <info-item
              name="Камень"
              icon="mdi-collage"
              :amount="battle.reward.stone"
            />
            <info-item
              name="Металл"
              icon="mdi-gold"
              :amount="battle.reward.iron"
            />
            <info-item
              name="Сферы"
              icon="mdi-crystal-ball"
              :amount="battle.reward.orb"
            />
          </v-row>
        </div>
      </v-card>
    </v-expand-transition>
  </v-row>
</template>

<script>
import InfoItem from "@/components/InfoItem";
import { mapState } from "vuex";
export default {
  components: {
    InfoItem
  },
  props: {
    battle: Object
  },
  data() {
    return {
      expand: false
    };
  },
  computed: {
    ...mapState({
      vk_id: state => state.app.vk_id
    })
  }
};
</script>

<style scoped>
.battle-list-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

}
</style>
