<template>
  <v-list-item>
        <v-list-item-content>
          <v-list-item-title>

            <v-badge color="green" :content="`${count}`" inline>
              {{name}}
            </v-badge>
          </v-list-item-title>
          <v-list-item-subtitle>
            <slot></slot>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="align-self-center">
          <v-btn height="50" min-width="40" class="pa-0" @click="build">
            <v-icon size="50">mdi-plus</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
</template>

<script>
export default {
    props: {
        name: String,
        count: Number,
        build: Function
    }
}
</script>

<style>

</style>