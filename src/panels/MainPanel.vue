<template>
  <v-card flat>
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
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  methods: {
    ...mapActions(["extract"])
  }
};
</script>

<style></style>
