<template>
  <v-app>
      <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    data:    function () {
      return {
        title:           'CamFight'
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
