<template>
  <v-row no-gutters class="py-2">
    <div class="data-info col-12">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-pine-tree</v-icon> Дерево</div>
        <div class="data-info_amount">
          {{ round(game.wood) }} / {{ round(game.wood_max) }}
        </div>
      </v-row>
    </div>
    <div class="data-info col-12">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-collage</v-icon> Камень</div>
        <div class="data-info_amount">
          {{ round(game.stone) }} / {{ round(game.stone_max) }}
        </div>
      </v-row>
    </div>
    <!-- <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-hexagon-multiple</v-icon> Руда</div>
        <div class="data-info_amount">{{ round(game.ore) }}</div>
      </v-row>
    </div> -->
    <div class="data-info col-12">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-gold</v-icon> Металл</div>
        <div class="data-info_amount">{{ round(game.iron) }}</div>
      </v-row>
    </div>
    <!-- <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-crystal-ball</v-icon> Сферы</div>
        <div class="data-info_amount">{{ round(game.orb) }}</div>
      </v-row>
    </div> -->

    <!-- <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-flask</v-icon> Алхимия</div>
        <div class="data-info_amount">{{ round(game.alchemy) }}</div>
      </v-row>
    </div> -->

    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-human-male-male</v-icon> Жители</div>
        <div class="data-info_amount">
          {{ Math.floor(game.citizens) }} / {{ game.citizens_max }}
        </div>
      </v-row>
    </div>
    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-flash</v-icon> Энергия</div>
        <div class="data-info_amount">
          {{ round(game.energy) }} / {{ round(game.energy_max) }}
        </div>
      </v-row>
    </div>

    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-database</v-icon> Золото</div>
        <div class="data-info_amount">{{ round(game.gold) }}</div>
      </v-row>
    </div>

    <div class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-image-filter-hdr</v-icon> Земли</div>
        <div class="data-info_amount">
          {{ round(game.terrain_free) }} / {{ round(game.terrain) }}
        </div>
      </v-row>
    </div>

    <!-- <div v-if="tab == 'war'" class="data-info col-6">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-image-filter-hdr</v-icon> Земли</div>
        <div class="data-info_amount">
          {{ round(game.terrain_free) }} / {{ round(game.terrain) }}
        </div>
      </v-row>
    </div> -->
    <div v-if="tab == 'war'" class="data-info col-12">
      <v-row class="justify-space-between" no-gutters>
        <div><v-icon>mdi-trophy</v-icon> Трофеи</div>
        <div class="data-info_amount">{{ round(game.trophy) }}</div>
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
  computed: {
    ...mapState({
      game: state => state.game.data
    })
  },
  methods: {
    round(value) {
      if (!value) {
        return 0;
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + "к";
      } else if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "кк";
      } else {
        return Math.floor(value);
      }
    }
  }
};
</script>

<style scoped>
.data-info {
  /* border-top: 1px solid #f5f5f5; */
  border-bottom: 1px solid #f5f5f5;
  /* color: white; */
  /* background-color: rgba(57, 58, 59, 0.863); */
  font-size: 14px;
  padding: 0px 6px !important;
}
.data-info_amount {
  font-size: 16px;
}
</style>
