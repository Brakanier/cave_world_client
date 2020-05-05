<template>
<div class="margin-60">
    <battle-item-list v-for="(battle, i) in battles" :key="i"  :battle="battle"></battle-item-list>
</div>
</template>

<script>
import { battles } from "@/plugins/api/game";
import BattleItemList from "./BattleItemList";
export default {
  components: {
    BattleItemList
  },
  data() {
    return {
      battles: []
    };
  },
  created() {
    battles().then(r => {
        console.log(r.data)
      this.battles = r.data;
    });
  }
};
</script>

<style scoped>
.margin-60 {
    margin-bottom: 60px;
}
</style>
