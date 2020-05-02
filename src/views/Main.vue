<template>
  <v-app>
    <v-content>
      <v-container>
        <v-tabs-items v-model="tab">
          <v-tab-item value="main">
            <info-view />
            <div>
              <v-btn @click="extractWood">Добыть дерево</v-btn>
              <v-btn @click="extractStone">Добыть камень</v-btn>
            </div>
          </v-tab-item>
          <v-tab-item value="citizens">
            citizens
          </v-tab-item>
          <v-tab-item value="events">
            events
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
import { mapActions } from "vuex";
export default {
  components: {
    InfoView
  },
  data() {
    return {
      tab: "main",
      items: ["main", "citizens", "events"]
    };
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    ...mapActions(["extractWood", "extractStone"])
  }
};
</script>

<style></style>
