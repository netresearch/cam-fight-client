<template>
  <v-app>
    <router-view></router-view>
    <Portrait></Portrait>
  </v-app>
</template>

<script>
  import Portrait from '@/components/Portrait'

  export default {
    data:       function() {
      return {
        title: 'CamFight'
      }
    },
    methods:    {
      back() {
        this.$router.go(-1)
      }
    },
    components: {
      Portrait
    }
  }
</script>
