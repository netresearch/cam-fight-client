<template>
  <v-app dark>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data:    function () {
      return {
        title: 'CamFight'
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
