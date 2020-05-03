<template>
  <v-card flat>
    <div>Свободные жители: {{citizens_free}}</div>
    <v-list three-line>
      <citizen-list-item v-if="wood_work" name="Лесоруб" :count="wood_inwork" :plus="() => citizen(['wood', 1])" :minus="() => citizen(['wood', -1])"/>
      <citizen-list-item v-if="stone_work" name="Шахтер" :count="ore_inwork" :plus="() => citizen(['ore', 1])" :minus="() => citizen(['ore', -1])"/>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CitizenListItem from '@/components/CitizenListItem'
export default {
  components: {
    CitizenListItem
  },
  computed: {
    ...mapState({
        citizens_free: state => state.game.data.citizens_free,
        wood_work: state=> state.game.data.wood_work,
        stone_work: state=> state.game.data.stone_work,
        ore_work: state=> state.game.data.ore_work,
        wood_inwork: state => state.game.data.wood_inwork,
        stone_inwork: state => state.game.data.stone_inwork,
        ore_inwork: state => state.game.data.ore_inwork,
    })
  },
  methods: {
    ...mapActions(["citizen"])
  }
};
</script>

<style></style>
