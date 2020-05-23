<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import bridge from "@vkontakte/vk-bridge";
export default {
  name: "App",
  components: {},
  created() {
    if (
      window.location.href.includes("vk_") ||
      process.env.NODE_ENV === "production"
    ) {
      bridge.send("VKWebAppInit", {});
      this.axios.get("/login/vk" + window.location.search).then(r => {
        console.log(r);
        this.$store.commit("app/setToken", r.data.token);
        this.$store.commit("app/setNickname", r.data.nickname);
        this.$store.commit("app/setVkId", r.data.vk_id);
        this.$connect.open(r.data.token)
      });
    } else {
      this.axios
        .get("/login/test", {
          params: {
            vk_id: 55811116 //324999104
          }
        })
        .then(r => {
          console.log(r);
          this.$store.commit("app/setToken", r.data.token);
          this.$store.commit("app/setNickname", r.data.nickname);
          this.$store.commit("app/setVkId", r.data.vk_id);
          // this.$store.dispatch("updateData");

          this.$connect.open(r.data.token)
        });
    }

    // if (!this.$store.state.app.updateDataInterval) {
    //   let id = setInterval(() => {
    //     this.$store.dispatch("updateData");
    //   }, 60000);
    //   this.$store.commit("app/setUpdateDataInterval", id);
    // }
    // if (!this.$store.state.app.incrementInterval) {
    //   let id = setInterval(() => {
    //     this.$store.dispatch("incrementData");
    //   }, 1000);
    //   this.$store.commit("app/setIncrementDataInterval", id);
    // }
  }
};
</script>

<style></style>
