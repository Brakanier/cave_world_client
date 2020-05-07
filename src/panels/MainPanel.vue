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
      <div class="col-12 text-center">
        <span class="title font-weight-bold" v-on:click="toggleNickname">{{
          nickname ? nickname : "Введите ник"
        }}</span>
      </div>
      <div class="col-12 text-center" v-if="exp_percent">
        <span v-if="exp_percent < 100" class="text--secondary font-weight-bold"
          >Уровень: {{ level }}</span
        >

        <v-btn v-else class="my-3" color="green accent-3" @click="getLevelUp()">
          <span class="font-weight-bold">Новый уровень</span>
        </v-btn>
        <v-progress-linear
          class="mb-5 mt-1"
          :color="exp_percent < 100 ? 'orange' : 'green accent-3'"
          height="25"
          :value="exp_percent"
          striped
        >
          <template>
            <strong>{{ current_exp }} / {{ need_exp }} xp</strong>
          </template>
        </v-progress-linear>
      </div>
    </v-row>
    <v-row class="justify-space-around py-5">
      <v-btn
        height="fit-content"
        class="col-3 py-3"
        @click="() => extract('wood')"
      >
        <div>
          <v-icon size="50">
            mdi-pine-tree
          </v-icon>
          <div>Дерево</div>
        </div>
      </v-btn>
      <v-btn
        height="fit-content"
        class="col-3 py-3"
        @click="() => extract('stone')"
      >
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

    <v-dialog
      v-model="openSetNickname"
      @click:outside="
        () => {
          localNickname = nickname;
        }
      "
    >
      <v-card>
        <v-card-title class="headline"></v-card-title>

        <v-card-text class="py-0"
          ><v-text-field
            label="Никнейм"
            v-model="localNickname"
            :rules="rules"
            counter="15"
          ></v-text-field
        ></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="
              () => {
                acceptNickname();
                toggleNickname();
              }
            "
            >Принять</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="openLevelReward">
      <v-card>
        <v-card-title class="headline">Награда за уровень!</v-card-title>

        <v-card-text class="py-0">
          <v-row>
            <info-item
              name="Энергия"
              icon="mdi-flash"
              :amount="levelReward.energy"
            />
            <info-item
              name="Земли"
              icon="mdi-image-filter-hdr"
              :amount="levelReward.terrain"
            />
            <info-item
              name="Алхимия"
              icon="mdi-flask"
              :amount="levelReward.alchemy"
            />
            <info-item
              name="Золото"
              icon="mdi-database"
              :amount="levelReward.gold"
            />
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="toggleLevelReward">Ок</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
import InfoItem from "@/components/InfoItem";
export default {
  components: {
    InfoItem
  },
  data() {
    return {
      openSetNickname: false,
      openLevelReward: false,
      localNickname: "",
      rules: [v => (v && v.length <= 15) || "Максимальная длина 15 символов"],
      levelReward: {}
    };
  },
  created() {
    this.localNickname = this.$store.state.app.nickname;
  },
  watch: {
    nickname: function() {
      this.localNickname = this.$store.state.app.nickname;
    }
  },
  computed: {
    ...mapState({
      nickname: state => state.app.nickname,
      level: state => state.game.data.level,
      current_exp: state => state.game.data.current_exp,
      need_exp: state => state.game.data.need_exp
    }),
    exp_percent() {
      console.log(this.current_exp / this.need_exp);
      return (100 * this.current_exp) / this.need_exp;
    }
  },
  methods: {
    ...mapActions(["extract", "levelUp"]),
    toggleNickname() {
      this.openSetNickname = !this.openSetNickname;
    },
    acceptNickname() {
      if (this.localNickname) {
        this.$store.dispatch("app/newNickname", this.localNickname);
      } else {
        this.localNickname = this.$store.state.app.nickname;
      }
    },
    getLevelUp() {
      this.levelUp().then(r => {
        console.log("reward", r.data);
        this.levelReward = r.data;
        this.openLevelReward = true;
        this.$store.commit("add", ["energy", r.data.energy]);
        this.$store.commit("add", ["alchemy", r.data.alchemy]);
        this.$store.commit("add", ["gold", r.data.gold]);
        this.$store.commit("add", ["terrain", r.data.terrain]);
        this.$store.dispatch("updateData");
      });
    },
    toggleLevelReward() {
      this.openLevelReward = !this.openLevelReward;
    }
  }
};
</script>

<style></style>
