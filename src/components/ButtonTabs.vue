<template>
  <v-row class="mb-3">
    <div
      outlined
      flat
      class="text-center button-tab"
      :class="{
        active: value == item.tab,
        'col-3': items.length == 4,
        'col-4': items.length == 3,
        'col-6': items.length == 2,
        'col-12': items.length == 1
      }"
      v-for="item in items"
      :key="item.tab"
      @click="() => $emit('input', item.tab)"
    >
      {{ item.name }}
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
.button-tab {
  border-radius: 4px;
  border: thin solid rgba(0, 0, 0, 0.12);
}
.active {
  border-bottom: none !important;
}
</style>
