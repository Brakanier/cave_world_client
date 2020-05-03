<template>
<v-card flat>
  
            <div>
              <v-btn @click="() => extract('wood')">Добыть дерево</v-btn>
              <v-btn @click="() => extract('stone')">Добыть камень</v-btn>
            </div>
</v-card>

      

</template>

<script>

import { mapActions } from "vuex";
export default {
components: {
  },
  methods: {
    ...mapActions(["extract"])
  }
}
</script>

<style>

</style>