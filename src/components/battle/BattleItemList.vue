<template>
  <v-row v-on:click="expand = !expand" class="py-2 battle-list-item">
    <!-- <div v-if="win" class="col-12 text-center pa-0 title ">
      Победа
    </div>
    <div v-else class="col-12 text-center pa-0 title red--text">
      Поражение
    </div> -->
    <div class="col-8 py-0 d-flex justify-start align-center">
      <div>
        <v-icon v-if="attack" size="50" :color="this.battle.win ? 'green' : 'red'">mdi-sword-cross</v-icon>
      <v-icon v-else size="50" :color="!this.battle.win ? 'green' : 'red'">mdi-shield</v-icon>
      </div>
      <div class="ml-3">
        <div v-if="attack">
        <span class="nickname font-weight-bold">{{
          battle.defender__nickname
        }}</span>
        <div>
          Атака - {{this.battle.win ? 'Победа' : 'Поражение'}}
        </div>
      </div>
      <div v-else>
        <span class="nickname font-weight-bold">{{
          battle.attack__nickname
        }}</span>
        <div>Защита - {{!this.battle.win ? 'Победа' : 'Поражение'}}</div>
      </div>
      <div>
        {{time}}
      </div>
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
        <div class="col-12 py-0">
          <v-row class="pb-1">
            <v-card-text class="py-0">
              <battle-info :battle="battle" :attack="attack">

      </battle-info>
            </v-card-text>
            
          </v-row>
        </div>
      </v-card>
    </v-expand-transition>
  </v-row>
</template>

<script>
import moment from 'moment'
import BattleInfo from "@/components/battle/BattleInfo"
import { mapState } from "vuex";
export default {
  components: {
    BattleInfo
  },
  props: {
    battle: Object
  },
  data() {
    return {
      expand: false
    };
  },
  created() {
    console.log('win', this.win)
    console.log('attack', this.attack)
    console.log(this.battle)
  },
  computed: {
    ...mapState({
      vk_id: state => state.app.vk_id
    }),
    win() {
      return this.battle.win && this.attack 
    },
    attack() {
      return this.battle.attack__vk_id == this.vk_id
    },
    time() {
      return moment.unix(this.battle.time).add(moment().utcOffset(), 'minutes').format('DD.MM - HH:mm:ss')
    }
  }
};
</script>

<style scoped>
.battle-list-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
