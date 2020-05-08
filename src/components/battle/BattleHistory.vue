<template>
  <div class="margin-60">
    <v-row class="justify-center">
      <div class="d-flex">
              <v-btn height="50" min-width="40" class="pa-0" @click="updateBattles">
            <v-icon size="50">mdi-cached</v-icon>
          </v-btn>
        </div>
    </v-row>

    <battle-item-list
      v-for="(battle, i) in battles"
      :key="i"
      :battle="battle"
    ></battle-item-list>
  </div>
</template>

<script>
import { battles } from "@/plugins/api/game";
import BattleItemList from "./BattleItemList";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    BattleItemList
  },
  data() {
    return {};
  },
  created() {
    // this.updateBattles();
  },
  computed: {
    ...mapState({
      battles: state => state.game.battles
    })
  },
  methods: {
    ...mapActions(["updateBattles"])
  }
};
</script>

<style scoped>
.margin-60 {
  margin-bottom: 60px;
}
</style>
