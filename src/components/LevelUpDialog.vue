<template>
  <v-dialog v-model="openLevelReward" :value="isLevelUp" @input="(value) => setIsLevelUp(value)">
      <v-card v-if="levelUpData">
        <v-card-title class="headline">Новый уровень!</v-card-title>

        <v-card-text class="py-0">
          <v-row>
            <info-item
              name="Энергия"
              icon="mdi-flash"
              :amount="levelUpData.energy"
            />
            <info-item
              name="Земли"
              icon="mdi-image-filter-hdr"
              :amount="levelUpData.terrain"
            />
            <!-- <info-item
              name="Алхимия"
              icon="mdi-flask"
              :amount="levelReward.alchemy"
            /> -->
            <info-item
              name="Золото"
              icon="mdi-database"
              :amount="levelUpData.gold"
            />
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="() => setIsLevelUp(false)">Ок</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState({
            isLevelUp: state => state.game.isLevelUp,
            levelUpData: state => state.game.levelUpData
        })
    },
    methods: {
        ...mapMutations(['setIsLevelUp'])
    }
}
</script>

<style>

</style>