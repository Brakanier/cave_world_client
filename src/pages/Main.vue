<template>
  <v-app>
    <v-content>
      <v-container class='py-0'>
        <info-view :tab="tab"/>
        <v-tabs-items v-model="tab">
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
        <v-tabs v-model="tab" centered grow hide-slider>
          <v-tab v-for="item in items" :key="item" :href="'#'+item">
            {{ item }}
            
          </v-tab>
          
        </v-tabs>
      </v-bottom-navigation>
    </v-content>
  </v-app>
</template>

<script>
import InfoView from "@/components/InfoView";
import MainPanel from "@/panels/MainPanel"
import BuildPanel from "@/panels/BuildPanel"
import CitizensPanel from "@/panels/CitizensPanel"
export default {
  components: {
    InfoView,
    MainPanel,
    BuildPanel,
    CitizensPanel
  },
  data() {
    return {
      tab: "main",
      items: ["main", "build", "citizens"]
    };
  },
  created() {

  },
  
};
</script>

<style></style>
