<template>
  <v-card flat>
    
    <button-tabs v-model="tab" :items="items"> </button-tabs>
    <div class="text-center">Безработные: {{ citizens_free }}</div>
    <v-tabs-items v-model="tab">
      <v-tab-item value="getting">
        <v-list three-line class="list-margin">
          <citizen-list-item
            name="Лесоруб"
            description="Добывает дерево 12 в час"
            :count="wood_inwork"
            :maxCount="wood_work"
            :plus="() => citizen(['wood', 1])"
            :minus="() => citizen(['wood', -1])"
          />
          <citizen-list-item
            name="Каменолом"
            description="Добывает камень 12 в час"
            :count="stone_inwork"
            :maxCount="stone_work"
            :plus="() => citizen(['stone', 1])"
            :minus="() => citizen(['stone', -1])"
          />
          <citizen-list-item
            name="Шахтер"
            description="Добывает руду 12 в час"
            :count="ore_inwork"
            :maxCount="ore_work"
            :plus="() => citizen(['ore', 1])"
            :minus="() => citizen(['ore', -1])"
          />
        </v-list>
      </v-tab-item>
      <v-tab-item value="spec">
        <v-list three-line class="list-margin">
          <citizen-list-item
            name="Кузнец"
            description="Плавит руду в металл 6 в час"
            :count="smith_inwork"
            :maxCount="smith_work"
            :plus="() => citizen(['smith', 1])"
            :minus="() => citizen(['smith', -1])"
          />
          <citizen-list-item
            name="Чародей"
            description="Собирает стихии в сферы 6 в час"
            :count="wizard_inwork"
            :maxCount="wizard_work"
            :plus="() => citizen(['wizard', 1])"
            :minus="() => citizen(['wizard', -1])"
          />
          <citizen-list-item
            name="Алхимик"
            description="Изучает алхимию 6 в час"
            :count="alchemist_inwork"
            :maxCount="alchemist_work"
            :plus="() => citizen(['alchemist', 1])"
            :minus="() => citizen(['alchemist', -1])"
          />
        </v-list>
      </v-tab-item>
      <v-tab-item value="army">
        <v-list three-line class="list-margin">
        <citizen-list-item
            name="Воин"
            description="Меч, щит и немного тупости"
            :count="warrior_inwork"
            :maxCount="warrior_work"
            :plus="() => citizen(['warrior', 1])"
            :minus="() => citizen(['warrior', -1])"
          />
        <citizen-list-item
            name="Лучник"
            description="Умеет стрелять из лука"
            :count="archer_inwork"
            :maxCount="archer_work"
            :plus="() => citizen(['archer', 1])"
            :minus="() => citizen(['archer', -1])"
          />
        
        <citizen-list-item
            name="Боевой маг"
            description="Жонглирует фаерболами"
            :count="warlock_inwork"
            :maxCount="warlock_work"
            :plus="() => citizen(['warlock', 1])"
            :minus="() => citizen(['warlock', -1])"
          />
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CitizenListItem from "@/components/CitizenListItem";
import ButtonTabs from "@/components/ButtonTabs";
export default {
  components: {
    CitizenListItem,
    ButtonTabs
  },
  data() {
    return {
      tab: "getting",
      items: [
        {
          name: "Добыча",
          tab: "getting"
        },
        {
          name: "Спец",
          tab: "spec"
        },
        {
          name: "Армия",
          tab: "army"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      citizens_free: state => state.game.data.citizens_free,

      wood_work: state => state.game.data.wood_work,
      stone_work: state => state.game.data.stone_work,
      ore_work: state => state.game.data.ore_work,

      smith_work: state => state.game.data.smith_work,
      wizard_work: state => state.game.data.wizard_work,
      alchemist_work: state => state.game.data.alchemist_work,

      warrior_work: state => state.game.data.warrior_work,
      archer_work: state => state.game.data.archer_work,
      warlock_work: state => state.game.data.warlock_work,

      wood_inwork: state => state.game.data.wood_inwork,
      stone_inwork: state => state.game.data.stone_inwork,
      ore_inwork: state => state.game.data.ore_inwork,

      smith_inwork: state => state.game.data.smith_inwork,
      wizard_inwork: state => state.game.data.wizard_inwork,
      alchemist_inwork: state => state.game.data.alchemist_inwork,

      warrior_inwork: state => state.game.data.warrior_inwork,
      archer_inwork: state => state.game.data.archer_inwork,
      warlock_inwork: state => state.game.data.warlock_inwork,
    })
  },
  methods: {
    ...mapActions(["citizen"])
  }
};
</script>

<style scoped>

</style>
