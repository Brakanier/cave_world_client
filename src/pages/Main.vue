<template>
  <v-app>
    <v-app-bar app dark flat color="rgba(0,0,0,.54)" height="44">
      <v-spacer></v-spacer>
      <v-toolbar-title>Cave World Alpha</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container class="py-0">
        <info-view :tab="tab" />
        <v-tabs-items v-model="tab">
          <v-tab-item value="war">
            <war-panel />
          </v-tab-item>
          <v-tab-item value="alchemy">
            <alchemy-panel />
          </v-tab-item>
          <v-tab-item value="main">
            <main-panel />
          </v-tab-item>
          <v-tab-item value="build">
            <build-panel />
          </v-tab-item>
          <v-tab-item value="citizens">
            <citizens-panel />
          </v-tab-item>
        </v-tabs-items>
      </v-container>
      <v-bottom-navigation fixed grow>
        <navigation-tabs v-model="tab" :items="items" />
      </v-bottom-navigation>
      <v-dialog :value="isOnAttack" @input="(value) => setIsOnAttack(value)">
      <v-card v-if="lastOnAttack">
        <v-card-title class="headline">На нас напали!</v-card-title>
        <v-card-subtitle class="headline">{{
          lastOnAttack.win ? "Победа!" : "Поражение..."
        }}</v-card-subtitle>
        <v-card-text class="py-0">
          <battle-info :battle="lastOnAttack" :attack="false">

          </battle-info>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="() => setIsOnAttack(false)">Ок</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-content>
  </v-app>
</template>

<script>
import NavigationTabs from "@/components/NavigationTabs";
import InfoView from "@/components/InfoView";
import MainPanel from "@/panels/MainPanel";
import BuildPanel from "@/panels/BuildPanel";
import CitizensPanel from "@/panels/CitizensPanel";
import AlchemyPanel from "@/panels/AlchemyPanel";
import WarPanel from "@/panels/WarPanel";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    NavigationTabs,
    InfoView,
    MainPanel,
    BuildPanel,
    CitizensPanel,
    AlchemyPanel,
    WarPanel
  },
  data() {
    return {
      tab: "main"
    };
  },
  computed: {
    ...mapState({
      wood_work: state => state.game.data.wood_work,
      warrior_work: state => state.game.data.warrior_work,
      alchemist_work: state => state.game.data.alchemist_work,
      isOnAttack: state => state.game.isOnAttack,
      lastOnAttack: state => state.game.lastOnAttack
    }),
    items() {
      let items = [];
      if (this.warrior_work) {
        items.push({
          icon: "mdi-sword-cross",
          tab: "war"
        });
      }
      if (this.alchemist_work) {
        items.push({
          icon: "mdi-flask",
          tab: "alchemy"
        })
      }
      items.push(
        {
          icon: "mdi-castle",
          tab: "main"
        },
        {
          icon: "mdi-home-group",
          tab: "build"
        }
      );
      if (this.wood_work) {
        items.push({
          icon: "mdi-human-male-male",
          tab: "citizens"
        });
      }

      return items;
    }
  },
  created() {},
  methods: {
    ...mapMutations(['setIsOnAttack'])
  }
};
</script>

<style>
.list-margin {
  margin-bottom: 50px;
}
</style>
