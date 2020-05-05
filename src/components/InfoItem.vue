<template>
  <div class="data-info col-6">
            <v-row class="justify-space-between" no-gutters>
              <div><v-icon>{{icon}}</v-icon> {{name}}</div>
              <div class="data-info_amount">
                {{ amount }}
              </div>
            </v-row>
          </div>
</template>

<script>
export default {
    props: {
        name: String,
        icon: String,
        amount: Number
    }
}
</script>

<style>
.data-info {
  /* border-top: 1px solid #f5f5f5; */
  border-bottom: 1px solid #f5f5f5;
  /* color: white; */
  /* background-color: rgba(57, 58, 59, 0.863); */
  font-size: 14px;
  padding: 0px 6px !important;
}
.data-info_amount {
  font-size: 16px;
}
</style>