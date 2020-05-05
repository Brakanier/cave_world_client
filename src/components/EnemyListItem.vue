<template>
  <v-list-item class="px-0">
    <v-list-item-avatar size="90" class="my-0 align-center">
      <v-img :src="user_avatar">
        <template v-slot:placeholder>
          <v-icon size="100">mdi-account-circle-outline</v-icon>
        </template>
      </v-img>
    </v-list-item-avatar>

    <v-list-item-content class="align-center py-0">
      <div>
        <span class="title font-weight-bold">{{nickname}}</span>
        
        <v-list-item-subtitle> Земли - {{ terrain }} </v-list-item-subtitle>
      </div>
    </v-list-item-content>
    <div>
      <v-btn @click="attack">
        Напасть
      </v-btn>
    </div>
    <!-- <v-list-item-action class="align-center">
        
      
    </v-list-item-action> -->
  </v-list-item>
</template>

<script>
import bridge from "@vkontakte/vk-bridge";
export default {
  props: {
    vk_id: Number,
    terrain: Number,
    nickname: String,
    attack: Function
  },
  data() {
    return {
      user_avatar: ""
    };
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

<style scoped></style>
