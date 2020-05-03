<template>
  <v-row>
    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-pine-tree</v-icon> Дерево</div>
        <div class="data-info_amount">{{ Math.floor(game.wood) }} / {{ game.wood_max }}</div>
      </v-row>
    </div>

    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-crystal-ball</v-icon> Сферы</div>
        <div class="data-info_amount">{{ Math.floor(game.orb) }}</div>
      </v-row>
    </div>
    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-collage</v-icon> Камень</div>
        <div class="data-info_amount">{{ Math.floor(game.stone) }} / {{ game.stone_max }}</div>
      </v-row>
    </div>
    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-flask</v-icon> Алхимия</div>
        <div class="data-info_amount">{{ Math.floor(game.alchemy) }}</div>
      </v-row>
    </div>
    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-hexagon-multiple</v-icon> Руда</div>
        <div class="data-info_amount">{{ Math.floor(game.ore) }} / {{ game.ore_max }}</div>
      </v-row>
    </div>
    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-gold</v-icon> Металл</div>
        <div class="data-info_amount">{{ Math.floor(game.iron) }}</div>
      </v-row>
    </div>

    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-flash</v-icon> Энергия</div>
        <div class="data-info_amount">{{ Math.floor(game.energy) }}</div>
      </v-row>
    </div>

    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-human-male-male</v-icon> Жители</div>
        <div class="data-info_amount">{{ game.citizens }} / {{ game.citizens_max }}</div>
      </v-row>
    </div>

    <div v-if="false" class="data-info col-4">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-database</v-icon> Золото</div>
        <div class="data-info_amount">{{ game.gold }}</div>
      </v-row>
    </div>

    <div v-if="tab == 'build'" class="data-info col-12">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-image-filter-hdr</v-icon> Земли</div>
        <div class="data-info_amount">{{ game.terrain }}</div>
      </v-row>
    </div>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    tab: String
  },
  computed: mapState({
    game: state => state.game.data,
    wood: state => state.game.wood,
    stone: state => state.game.stone,
    wood_max: state => state.game.wood_max,
    citizens_max: state => state.game.citizens_max
  })
};
</script>

<style scoped>
.data-info {
  border: 1px solid #f5f5f5;
  /* color: white; */
  /* background-color: rgba(57, 58, 59, 0.863); */
  font-size: 14px;
  padding: 0px 2px;
}
.data-info_amount {
  font-size: 16px;
}
</style>
