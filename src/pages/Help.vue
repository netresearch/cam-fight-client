<template>
  <v-fade-transition>
    <v-app dark>
      <v-layout row transition="slide-x-transition">
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-toolbar>
              <v-btn icon @click.stop="goBack">
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-toolbar-title>Help</v-toolbar-title>
            </v-toolbar>
            <v-container>
              <v-content>
                <h1>Challenges</h1>
                <p>{{ help }}</p>
              </v-content>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </v-fade-transition>
</template>

<script>
  export default {
    created() {
      this.$http.get('http://cam-fight-server.herokuapp.com/api/help/show.php').then((response) => {
        this.help = response.data
      })
    },
    data() {
      return {
        help: {}
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>
