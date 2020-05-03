<template>
  
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import bridge from '@vkontakte/vk-bridge';
export default {
  name: 'App',
  components: {
  },
  computed: {
    token() {
      return this.$store.state.app.token
    },
    wood() {
      return this.$store.state.store.wood
    }
  },
  created() {
    // bridge.send("VKWebAppInit", {});
    // this.axios.get('/login/vk' + window.location.search).then((r) => {
    //   console.log(r)
    //   this.$store.commit('app/setToken', r.data)
    // })
    console.log(this.$store)
    this.axios.get('/login/test', {
      params: {
        vk_id: 55811116
      }
    }).then((r) => {
      console.log(r)
      this.$store.commit('app/setToken', r.data)
      this.$store.dispatch('updateData')
    })
    
    if (!this.$store.state.app.updateDataInterval) {
      let id = setInterval(() => {this.$store.dispatch('updateData')}, 60000)
      this.$store.commit('app/setUpdateDataInterval', id)
    }
    
  }
}
</script>

<style>

</style>
