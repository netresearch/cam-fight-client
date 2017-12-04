<template>
  <div>
    <v-carousel class="carousel-full-height" hide-controls dark interval="60000">
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
      @click="skip"
    >
      <v-icon>flight_takeoff</v-icon>
    </v-btn>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            src: 'http://lorempixel.com/750/1334/people/9'
          },
          {
            src: 'http://lorempixel.com/750/1334/people/10'
          },
          {
            src: 'http://lorempixel.com/750/1334/people/3'
          },
          {
            src: 'http://lorempixel.com/750/1334/people/4'
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
  }
  .carousel__controls {
    background: none !important;
  }
  .button-skip {
    bottom: 55px !important;
  }
</style>
