<template>
  <v-list-item class="px-0 py-2 enemy-list-item">
    <v-list-item-avatar size="90" class="my-0 align-center">
      <v-img :src="user_avatar">
        <template v-slot:placeholder>
          <v-icon size="100">mdi-account-circle-outline</v-icon>
        </template>
      </v-img>
    </v-list-item-avatar>

    <v-list-item-content class="align-center py-0">
      <div>
        <span class="nickname font-weight-bold">{{nickname}}</span>
        
        <v-list-item-subtitle> Уровень - {{ level }} </v-list-item-subtitle>
        <v-list-item-subtitle> Трофеи - {{ trophy }} </v-list-item-subtitle>
        <v-list-item-subtitle> Земли - {{ terrain }} </v-list-item-subtitle>
      </div>
    </v-list-item-content>
    <div>
      <!-- <v-btn @click="attack">
        Напасть
      </v-btn> -->
      <v-btn height="50" min-width="40" class="pa-0" @click="attack" :disabled="!canAttack">
            <v-icon color="red" size="50">mdi-sword-cross</v-icon>
          </v-btn>
    </div>
    <!-- <v-list-item-action class="align-center">
        
      
    </v-list-item-action> -->
  </v-list-item>
</template>

<script>
import {mapState} from 'vuex'
import bridge from "@vkontakte/vk-bridge";
export default {
  props: {
    vk_id: Number,
    terrain: Number,
    trophy: Number,
    level: Number,
    nickname: String,
    attack: Function
  },
  data() {
    return {
      user_avatar: ""
    };
  },
  computed: {
    ...mapState({
      warrior_inwork: state => state.game.data.warrior_inwork,
      archer_inwork: state => state.game.data.archer_inwork,
      warlock_inwork: state => state.game.data.warlock_inwork,
    }),
    canAttack() {
      return this.warrior_inwork || this.archer_inwork || this.warlock_inwork ? true : false
    }
  },
  created() {
    if (window.location.href.includes("vk_")) {
      bridge.send("VKWebAppGetUserInfo", {}).then(r => {
        console.log(r);
        this.user_avatar = r.photo_100;
      });
    }
  }
};
</script>

<style scoped>
.enemy-list-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
