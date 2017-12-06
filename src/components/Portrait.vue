<template>
  <v-layout v-resize="onResize" row justify-center>
    <v-dialog v-model="landscape" max-width="290">
      <v-card>
        <v-card-title class="headline">Portrait mode</v-card-title>
        <v-card-text>This app is optimized for portrait mode. Please rotate your phone!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-icon large class="ma-2">screen_rotation</v-icon>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    data:    () => (
      {
        landscape: true
      }
    ),
    mounted() {
      this.onResize()
    },
    methods: {
      onResize() {
        this.landscape = window.innerWidth > window.innerHeight
      }
    }
  }
</script>
