<template>
  <v-card flat>
    <v-list three-line class="list-margin">
      <enemy-list-item v-for="enemy in found_enemies" :key="enemy.user__id" :terrain="enemy.terrain" :attack="() => attack(enemy.user__id)"></enemy-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import EnemyListItem from "@/components/EnemyListItem"
export default {
    components: {
        EnemyListItem
    },
  created() {
    if (!this.$store.state.found_enemies) {
      this.$store.dispatch("findEnemies");
    }
  },
  computed: {
      ...mapState({
      found_enemies: state => state.game.found_enemies,
    })
  },
  methods: {
      ...mapActions(["findEnemies", "attack"])
  }
};
</script>

<style></style>
