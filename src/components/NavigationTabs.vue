<template>
  <v-row no-gutters class="align-center justify-space-around">
    <div
      outlined
      flat
      class="text-center d-flex"
      :class="{
        active: value == item.tab
      }"
      v-for="item in items"
      :key="item.tab"
      @click="() => $emit('input', item.tab)"
    >
      <v-icon
        size="34"
        :class="{
          active: value == item.tab
        }"
        >{{ item.icon }}</v-icon
      >
    </div>
  </v-row>
</template>

<script>
export default {
  props: {
    value: String,
    items: Array
  },
  data() {
    return {
      tab: this.value
    };
  }
};
</script>

<style scoped>
.active {
  color: #1976d2!important;
}
</style>
