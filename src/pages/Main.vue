<template>
  <v-app>
    <v-app-bar
      app
      dark
      flat
      color="rgba(0,0,0,.54)"
      height="44"
    >
    <v-spacer></v-spacer>
      <v-toolbar-title>Cave World Alpha</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container class='py-0'>
        <info-view :tab="tab"/>
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
    </v-content>
  </v-app>
</template>

<script>
import NavigationTabs from "@/components/NavigationTabs"
import InfoView from "@/components/InfoView";
import MainPanel from "@/panels/MainPanel"
import BuildPanel from "@/panels/BuildPanel"
import CitizensPanel from "@/panels/CitizensPanel"
import AlchemyPanel from "@/panels/AlchemyPanel"
import WarPanel from "@/panels/WarPanel"
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
      tab: "main",
      items: [
        {
          icon: "mdi-compass-rose",
          tab: "war"
        },
        {
          icon: "mdi-flask",
          tab: "alchemy"
        },
        {
          icon: "mdi-castle",
          tab: "main"
        },
        {
          icon: "mdi-home-group",
          tab: "build"
        },
        {
          icon: "mdi-human-male-male",
          tab: "citizens"
        }
      ]
    };
  },
  created() {

  },
  
};
</script>

<style>
.list-margin {
  margin-bottom: 50px;
}
</style>
