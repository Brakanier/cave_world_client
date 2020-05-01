<template>
  
  <div>
    {{token}}
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
      console.log('token', this.$store.state.app.token)
      return this.$store.state.app.token
    }
  },
  created() {
    bridge.send("VKWebAppInit", {});
    this.axios.get('/login/vk' + window.location.search).then((r) => {
      console.log(r)
      this.$store.commit('setToken', r.data)
      
    })
  }
}
</script>

<style>

</style>
