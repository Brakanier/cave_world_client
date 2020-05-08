<template>
  <v-card flat>
    <button-tabs v-model="tab" :items="items"> </button-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="houses">
        <v-list three-line class="list-margin">
          <build-list-item name="Хижина" :count="hut" :build="buildHut">
            <div>+ 1 место для жителя</div>
            <div>- 10 дерева</div>
          </build-list-item>
          <build-list-item
            v-if="hut"
            name="Дом"
            :count="house"
            :build="buildHouse"
          >
            <div>+ 5 мест для жителей</div>
            <div>- 15 дерева</div>
            <div>- 15 камня</div>
          </build-list-item>
          <build-list-item
            v-if="house"
            name="Особняк"
            :count="mansion"
            :build="buildMansion"
          >
            <div>+ 10 мест для жителей</div>
            <div>- 30 дерева</div>
            <div>- 30 камня</div>
          </build-list-item>
        </v-list>
      </v-tab-item>
      <v-tab-item value="getting">
        <v-list three-line class="list-margin">
          <build-list-item
            name="Навес"
            :count="wood_store"
            :build="buildWoodStore"
          >
            <div>+100 места для дерева</div>
            <div>-30 дерева</div>
            <div>-30 камня</div>
          </build-list-item>
          <build-list-item
            name="Склад"
            :count="stone_store"
            :build="buildStoneStore"
          >
            <div>+100 места для камня</div>
            <div>-30 дерева</div>
            <div>-30 камня</div>
          </build-list-item>
          <build-list-item
            name="Лесопилка"
            :count="wood_work"
            :build="buildWoodWork"
          >
            <div>+1 место лесоруба</div>
            <div>-10 дерева</div>
            <div>-10 камня</div>
          </build-list-item>
          <build-list-item
            name="Каменоломня"
            :count="stone_work"
            :build="buildStoneWork"
          >
            <div>+1 место каменолома</div>
            <div>-10 дерева</div>
            <div>-10 камня</div>
          </build-list-item>
          <build-list-item
            v-if="wood_work"
            name="Шахта"
            :count="ore_work"
            :build="buildOreWork"
          >
            <div>+1 место шахтера</div>
            <div>-10 дерева</div>
            <div>-10 камня</div>
          </build-list-item>
        </v-list>
      </v-tab-item>
      <v-tab-item value="spec">
        <v-list three-line class="list-margin">
          <build-list-item
            v-if="ore_work"
            name="Кузница"
            :count="smith_work"
            :build="buildSmithWork"
          >
            <div>+1 место для кузнеца</div>
            <div>-10 дерева</div>
            <div>-10 камня</div>
          </build-list-item>
          <build-list-item
            v-if="smith_work"
            name="Алтарь"
            :count="wizard_work"
            :build="buildWizardWork"
          >
            <div>+1 место для чародея</div>
            <div>-10 дерева</div>
            <div>-10 камня</div>
          </build-list-item>
          <build-list-item
            v-if="wizard_work"
            name="Лаборатория"
            :count="alchemist_work"
            :build="buildAlchemistWork"
          >
            <div>+1 место для алхимика</div>
            <div>-10 дерева</div>
            <div>-10 камня</div>
          </build-list-item>
        </v-list>
      </v-tab-item>
      <v-tab-item value="army">
        <build-list-item
          v-if="smith_work"
          name="Казармы"
          :count="warrior_work"
          :build="buildWarriorWork"
        >
          <div>+5 мест для воинов</div>
          <div>-10 дерева</div>
          <div>-10 камня</div>
        </build-list-item>
        <build-list-item
          v-if="warrior_work"
          name="Стрельбище"
          :count="archer_work"
          :build="buildArcherWork"
        >
          <div>+3 места для лучников</div>
          <div>-10 дерева</div>
          <div>-10 камня</div>
        </build-list-item>
        <build-list-item
          v-if="archer_work"
          name="Башня магов"
          :count="warlock_work"
          :build="buildWarlockWork"
        >
          <div>+1 место для боевых магов</div>
          <div>-10 дерева</div>
          <div>-10 камня</div>
        </build-list-item>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BuildListItem from "@/components/BuildListItem";
import ButtonTabs from "@/components/ButtonTabs";
export default {
  components: {
    BuildListItem,
    ButtonTabs
  },
  data() {
    return {
      tab: "houses"
    };
  },
  created() {},
  computed: {
    ...mapState({
      hut: state => state.game.data.hut,
      house: state => state.game.data.house,
      mansion: state => state.game.data.mansion,

      wood_store: state => state.game.data.wood_store,
      stone_store: state => state.game.data.stone_store,

      wood_work: state => state.game.data.wood_work,
      stone_work: state => state.game.data.stone_work,
      ore_work: state => state.game.data.ore_work,

      smith_work: state => state.game.data.smith_work,
      wizard_work: state => state.game.data.wizard_work,
      alchemist_work: state => state.game.data.alchemist_work,

      warrior_work: state => state.game.data.warrior_work,
      archer_work: state => state.game.data.archer_work,
      warlock_work: state => state.game.data.warlock_work
    }),
    items() {
      let items = [
        {
          name: "Дома",
          tab: "houses"
        }
      ];
      if (this.hut) {
        items.push({
          name: "Добыча",
          tab: "getting"
        });
      }
      if (this.ore_work) {
        items.push({
          name: "Спец",
          tab: "spec"
        });
      }
      if (this.smith_work) {
        items.push({
          name: "Армия",
          tab: "army"
        });
      }

      return items;
    }
  },
  methods: {
    ...mapActions([
      "buildHut",
      "buildHouse",
      "buildMansion",

      "buildWoodStore",
      "buildStoneStore",

      "buildWoodWork",
      "buildStoneWork",
      "buildOreWork",

      "buildSmithWork",
      "buildWizardWork",
      "buildAlchemistWork",

      "buildWarriorWork",
      "buildArcherWork",
      "buildWarlockWork"
    ])
  }
};
</script>

<style scoped></style>
