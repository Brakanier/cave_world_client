<template>
  <v-card flat>
    <button-tabs v-model="tab" :items="items"> </button-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="houses">
        <v-list three-line class="list-margin">
          <build-list-item name="Хижина" :count="hut" :build="buildHut" :enabled="wood >= hut_wood">
            <div>+ 1 место для жителя</div>
            <div>- {{hut_wood}} дерева</div>
          </build-list-item>
          <build-list-item
            v-if="hut"
            name="Дом"
            :count="house"
            :build="buildHouse"
            :enabled="wood >= house_wood && stone >= house_stone"
          >
            <div>+ 5 мест для жителей</div>
            <div>- {{house_wood}} дерева</div>
            <div>- {{house_stone}} камня</div>
          </build-list-item>
          <build-list-item
            v-if="house"
            name="Особняк"
            :count="mansion"
            :build="buildMansion"
            :enabled="wood >= mansion_wood && stone >= mansion_stone"
          >
            <div>+ 10 мест для жителей</div>
            <div>- {{mansion_wood}} дерева</div>
            <div>- {{mansion_stone}} камня</div>
          </build-list-item>
        </v-list>
      </v-tab-item>
      <v-tab-item value="getting">
        <v-list three-line class="list-margin">
          <build-list-item
            name="Навес"
            :count="wood_store"
            :build="buildWoodStore"
            :enabled="wood >= wood_store_wood && stone >= wood_store_stone"
          >
            <div>+100 места для дерева</div>
            <div>- {{wood_store_wood}} дерева</div>
            <div>- {{wood_store_stone}} камня</div>
          </build-list-item>
          <build-list-item
            name="Склад"
            :count="stone_store"
            :build="buildStoneStore"
            :enabled="wood >= stone_store_wood && stone >= stone_store_stone"
          >
            <div>+100 места для камня</div>
            <div>- {{stone_store_wood}} дерева</div>
            <div>- {{stone_store_stone}} камня</div>
          </build-list-item>
          <build-list-item
            name="Лесопилка"
            :count="wood_work"
            :build="buildWoodWork"
            :enabled="wood >= wood_work_wood && stone >= wood_work_stone"
          >
            <div>+1 место лесоруба</div>
            <div>- {{wood_work_wood}} дерева</div>
            <div>- {{wood_work_stone}} камня</div>
          </build-list-item>
          <build-list-item
            name="Каменоломня"
            :count="stone_work"
            :build="buildStoneWork"
            :enabled="wood >= stone_work_wood && stone >= stone_work_stone"
          >
            <div>+1 место каменолома</div>
            <div>- {{stone_work_wood}} дерева</div>
            <div>- {{stone_work_stone}} камня</div>
          </build-list-item>
          <build-list-item
            v-if="wood_work"
            name="Шахта"
            :count="ore_work"
            :build="buildOreWork"
            :enabled="wood >= ore_work_wood && stone >= ore_work_stone"
          >
            <div>+1 место шахтера</div>
            <div>- {{ore_work_wood}} дерева</div>
            <div>- {{ore_work_stone}} камня</div>
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
            :enabled="wood >= smith_work_wood && stone >= smith_work_stone && ore >= smith_work_ore"
          >
            <div>+1 место для кузнеца</div>
            <div>- {{smith_work_wood}} дерева</div>
            <div>- {{smith_work_stone}} камня</div>
            <div>- {{smith_work_ore}} руды</div>
          </build-list-item>
          <build-list-item
            v-if="smith_work"
            name="Алтарь"
            :count="wizard_work"
            :build="buildWizardWork"
            :enabled="wood >= wizard_work_wood && stone >= wizard_work_stone && ore >= wizard_work_ore && iron >= wizard_work_iron"
          >
            <div>+1 место для чародея</div>
            <div>- {{wizard_work_wood}} дерева</div>
            <div>- {{wizard_work_stone}} камня</div>
            <div>- {{wizard_work_ore}} руды</div>
            <div>- {{wizard_work_iron}} металла</div>
          </build-list-item>
          <build-list-item
            v-if="wizard_work"
            name="Лаборатория"
            :count="alchemist_work"
            :build="buildAlchemistWork"
            :enabled="wood >= alchemist_work_wood && stone >= alchemist_work_stone && ore >= alchemist_work_ore && iron >= alchemist_work_iron && orb >= alchemist_work_orb"
          >
            <div>+1 место для алхимика</div>
            <div>- {{alchemist_work_wood}} дерева</div>
            <div>- {{alchemist_work_stone}} камня</div>
            <div>- {{alchemist_work_ore}} руда</div>
            <div>- {{alchemist_work_iron}} металла</div>
            <div>- {{alchemist_work_orb}} сфер</div>
          </build-list-item>
        </v-list>
      </v-tab-item>
      <v-tab-item value="army">
        <build-list-item
          v-if="smith_work"
          name="Казармы"
          :count="warrior_work"
          :build="buildWarriorWork"
          :enabled="wood >= warrior_work_wood && stone >= warrior_work_stone && iron >= warrior_work_iron"
        >
          <div>+5 мест для воинов</div>
          <div>- {{warrior_work_wood}} дерева</div>
          <div>- {{warrior_work_stone}} камня</div>
          <div>- {{warrior_work_iron}} металла</div>
        </build-list-item>
        <build-list-item
          v-if="warrior_work"
          name="Стрельбище"
          :count="archer_work"
          :build="buildArcherWork"
          :enabled="wood >= archer_work_wood && stone >= archer_work_stone && iron >= archer_work_iron"
        >
          <div>+3 места для лучников</div>
          <div>- {{archer_work_wood}} дерева</div>
          <div>- {{archer_work_stone}} камня</div>
          <div>- {{archer_work_iron}} металла</div>
        </build-list-item>
        <build-list-item
          v-if="archer_work"
          name="Башня магов"
          :count="warlock_work"
          :build="buildWarlockWork"
          :enabled="wood >= warlock_work_wood && stone >= warlock_work_stone && iron >= warlock_work_iron && orb >= warlock_work_orb"
        >
          <div>+1 место для боевых магов</div>
          <div>- {{warlock_work_wood}} дерева</div>
          <div>- {{warlock_work_stone}} камня</div>
          <div>- {{warlock_work_iron}} металла</div>
          <div>- {{warlock_work_orb}} сфер</div>
        </build-list-item>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
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
    ...mapGetters([
      'hut_wood',
      'house_wood',
      'house_stone',
      'mansion_wood',
      'mansion_stone',
      'wood_store_wood',
      'wood_store_stone',
      'stone_store_wood',
      'stone_store_stone',
      'wood_work_wood',
      'wood_work_stone',
      'stone_work_wood',
      'stone_work_stone',
      'ore_work_wood',
      'ore_work_stone',
      'smith_work_wood',
      'smith_work_stone',
      'smith_work_ore',
      'wizard_work_wood',
      'wizard_work_stone',
      'wizard_work_ore',
      'wizard_work_iron',
      'alchemist_work_wood',
      'alchemist_work_stone',
      'alchemist_work_ore',
      'alchemist_work_iron',
      'alchemist_work_orb',
      'warrior_work_wood',
      'warrior_work_stone',
      'warrior_work_iron',
      'archer_work_wood',
      'archer_work_stone',
      'archer_work_iron',
      'warlock_work_wood',
      'warlock_work_stone',
      'warlock_work_iron',
      'warlock_work_orb'
    ]),
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
      warlock_work: state => state.game.data.warlock_work,
      wood: state => state.game.data.wood,
      stone: state => state.game.data.stone,
      ore: state => state.game.data.ore,
      iron: state => state.game.data.iron,
      orb: state => state.game.data.orb,
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
