<template>
  <v-list-item>
        <div class="col-3">
          <v-btn :disabled="count == 0" height="50" min-width="40" class="pa-0" @click="minus">
            <v-icon size="50">mdi-minus</v-icon>
          </v-btn>
        </div>
        <div class="col-6 text-center">
          <!-- <div><v-badge color="green" :content="`${count}`" inline>
            {{name}}
          </v-badge></div> -->
          <div>{{name}} - <span class="count">{{count}} / {{maxCount}}</span></div>
          <div class="description">
            {{description}}
          </div>
        </div>
        <div class="col-3">
          <v-btn :disabled="count >= maxCount || citizens_free == 0" height="50" min-width="40" class="pa-0" @click="plus">
            <v-icon size="50">mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-list-item>
</template>

<script>
import { mapState } from 'vuex'
export default {
props: {
        name: String,
        description: String,
        count: Number,
        maxCount: Number,
        plus: Function,
        minus: Function,
    },
    computed: {
      ...mapState({
        citizens_free: state => state.game.data.citizens_free
      })
    }
}
</script>

<style scoped>
.count {
  font-weight: 700;
}
.description {
  color: rgba(0,0,0,.6);
  line-height: 1.2;
  font-size: .875rem;
}
</style>