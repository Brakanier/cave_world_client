<template>
  <v-card flat>
    <v-row no-gutters class="justify-center mt-5">
      
      <v-card flat>
        <v-img min-height="100" min-width="100" :src="''">
        <template v-slot:placeholder>
          <v-icon size="100">mdi-account-circle-outline</v-icon>
        </template>
      </v-img>
      </v-card>
      <div class="col-12 text-center"><span class="title font-weight-bold" v-on:click="toggleNickname">{{nickname ? nickname : 'Введите ник'}}</span></div>
      <div class="col-12">
        <v-progress-linear
        class="my-5"
        color="orange"
        height="25"
        :value="expPercent"
        striped
      >
      <template>
          <strong>{{expCurrent}} / {{expNeed}} xp</strong>
        </template>
      </v-progress-linear>
      </div>
    </v-row>
    <v-row class="justify-space-around py-5">
      <v-btn height="fit-content" class="col-3 py-3" @click="() => extract('wood')">
        <div>
          <v-icon size="50">
            mdi-pine-tree
          </v-icon>
          <div>Дерево</div>
        </div>
      </v-btn>
      <v-btn height="fit-content" class="col-3 py-3" @click="() => extract('stone')">
        <div>
          <v-icon size="50">
            mdi-collage
          </v-icon>
          <div>Камень</div>
        </div>
      </v-btn>
      <!-- <v-btn height="fit-content" class="col-3 py-3" @click="() => extract('ore')">
        <div>
          <v-icon size="50">
            mdi-hexagon-multiple
          </v-icon>
          <div>Руда</div>
        </div>
      </v-btn> -->
    </v-row>
    
    <v-dialog v-model="openSetNickname" @click:outside="() => {localNickname = nickname}">
      <v-card>
        <v-card-title class="headline"></v-card-title>
        
        <v-card-text class="py-0"><v-text-field
              label="Никнейм"
              v-model="localNickname"
              :rules="rules"
              counter="15"
            ></v-text-field></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="() => {acceptNickname(); toggleNickname()}">Принять</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      expPercent: 30,
      expCurrent: 125,
      expNeed: 500,
      openSetNickname: false,
      localNickname: "",
      rules: [v => v.length <= 15 || 'Максимальная длина 15 символов']
    };
  },
  created() {
    this.localNickname = this.$store.state.app.nickname
  },
  watch: {
    nickname: function() {
      this.localNickname = this.$store.state.app.nickname
    }
  },
  computed: {
    ...mapState({
      nickname: state => state.app.nickname,
    })
  },
  methods: {
    ...mapActions(["extract"]),
    toggleNickname() {
      this.openSetNickname = !this.openSetNickname
    },
    acceptNickname() {
      this.$store.dispatch('app/newNickname', this.localNickname)
    },
  }
};
</script>

<style></style>
