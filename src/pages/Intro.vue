<template>
  <v-content>
    <v-carousel class="deep-purple lighten-1 carousel-full-height" hide-controls dark interval="60000">
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
    <v-btn
      color="pink"
      dark
      absolute
      bottom
      right
      fab
      class="button-skip"
      @click="skip">
      <v-icon>flight_takeoff</v-icon>
    </v-btn>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            src: '/static/img/intro_01.svg'
          },
          {
            src: '/static/img/intro_02.svg'
          },
          {
            src: '/static/img/intro_03.svg'
          }
        ]
      }
    },
    methods: {
      skip() {
        this.$router.push('team')
      }
    }
  }
</script>

<style>
  .carousel-full-height {
    position: absolute !important;
    height: 100% !important;
    padding: 0 16pt  !important;
  }
  .carousel__controls {
    background: none !important;
  }
  .button-skip {
    bottom: 55px !important;
  }
  .carousel__item {
    background-size: contain !important;
  }

</style>
