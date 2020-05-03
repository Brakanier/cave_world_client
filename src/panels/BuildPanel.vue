<template>
  <v-card flat>
    <v-list three-line>
        <build-list-item name="Хижина" :count="hut" :build="buildHut">
            <div>+1 место для жителя</div>
            <div>-10 дерева</div>
        </build-list-item>
        <build-list-item name="Навес" :count="wood_store" :build="buildWoodStore">
            <div>+100 места для дерева</div>
            <div>-30 дерева</div>
            <div>-30 камня</div>
        </build-list-item>
        <build-list-item name="Лесопилка" :count="wood_work" :build="buildWoodWork">
            <div>+1 место лесоруба</div>
            <div>-10 дерева</div>
            <div>-10 камня</div>
        </build-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BuildListItem from '@/components/BuildListItem'
export default {
  components: {
      BuildListItem
  },
  created() {

  },
  computed: {
    ...mapState({
        hut: state => state.game.data.hut,
        wood_store: state => state.game.data.wood_store,
        wood_work: state => state.game.data.wood_work

    })
  },
  methods: {
    ...mapActions(["buildWoodStore", "buildHut", "buildWoodWork"])
  }
};
</script>

<style></style>
