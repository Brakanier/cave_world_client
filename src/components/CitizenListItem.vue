<template>
  <v-list-item>
        <div class="col-3">
          <v-btn height="50" min-width="40" class="pa-0" @click="minus">
            <v-icon size="50">mdi-minus</v-icon>
          </v-btn>
        </div>
        <div class="col-6 text-center">
          <v-badge color="green" :content="`${count}`" inline>
            {{name}}
          </v-badge>
        </div>
        <div class="col-3">
          <v-btn height="50" min-width="40" class="pa-0" @click="plus">
            <v-icon size="50">mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-list-item>
</template>

<script>
export default {
props: {
        name: String,
        count: Number,
        plus: Function,
        minus: Function
    }
}
</script>

<style>

</style>