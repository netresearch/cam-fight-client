<template>
  <v-slide-x-reverse-transition>
    <v-layout row fill-height>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>

          <v-card-media :src="image" v-touch="{right: () => goBack()}">
            <v-layout column class="media" fill-height>
              <v-card-title>
                <v-btn dark icon @click="goBack">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn dark icon @click="goHelp">
                  <v-icon>help</v-icon>
                </v-btn>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-title class="white--text pl-5 pt-5">
                <div class="display-1 pl-5 pt-5">Image upload</div>
              </v-card-title>
            </v-layout>
          </v-card-media>

          <v-list two-line>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-if="challenge.title">{{ challenge.title }}</v-list-tile-title>
                <v-list-tile-sub-title v-if="challenge.subtitle">{{ challenge.subtitle }}</v-list-tile-sub-title>
                <p v-if="challenge.desciption">{{ challenge.desciption}}</p>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-bottom-nav absolute color="transparent">
            <v-spacer></v-spacer>
            <v-btn flat color="teal">
              <span>Photo</span>
              <v-icon>camera</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-bottom-nav>

        </v-card>
      </v-flex>

    </v-layout>
  </v-slide-x-reverse-transition>
</template>

<script>
  export default {
    created() {
      console.info(this.$route.params)
      this.$http.get(
        'https://cam-fight-server.herokuapp.com/api/challenge/show.php',
        {
          params:
            { id: this.$route.params.id }
        }
      ).then((response) => {
        this.challenge = response.data
      })
    },
    data() {
      return {
        challenge: {
          id:          '',
          title:       '',
          subtitle:    '',
          description: '',
          bgColor:     ''
        },
        image:     'http://via.placeholder.com/600x300?text=...'
      }
    },
    methods: {
      goHelp() {
        this.$router.push({ name: 'Help' })
      },
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>

  body,
  .card {
    height: 100% !important;
  }

  .media {
    height: 100%;
    margin: 0;
  }
</style>
