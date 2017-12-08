<template>
  <v-app dark>
    <v-container fluid fill-height class="primary">

      <v-layout flex align-center justify-center>
        <v-progress-circular
          :size="240"
          :width="3"
          :rotate="360"
          :value="value"
          color="white"
        >
          {{ value }}
        </v-progress-circular>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        interval: {},
        value:    0
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
    },
    mounted() {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0
          )
        }
        this.value += 10
      }, 1000)
    }
  }
</script>

<style>
  .progress-circular__info {
    font-size: 4em !important;
    font-weight: 100 !important;
  }
</style>
