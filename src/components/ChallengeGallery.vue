<template>
  <v-layout column>
    <v-flex xs12 sm6 offset-sm3>
      <v-container fluid grid-list-md class="grey darken-1">
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs6`]: true }"
            v-for="image in images"
            :key="image.team"
          >
            <v-card class="pb-5">
              <v-card-media
                :src="image.path"
                height="200px">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="image.team"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>


              <v-bottom-nav absolute :value="true" :active.sync="myVote" color="white">
                <v-spacer></v-spacer>
                <v-btn flat color="teal" :value="image.id" @click="vote(image.id)">
                  <span>Vote</span>
                  <v-badge color="deep-purple">
                    <span slot="badge">{{image.votes}}</span>
                    <v-icon medium>favorite</v-icon>
                  </v-badge>
                </v-btn>
                <v-spacer></v-spacer>
              </v-bottom-nav>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data() {
      return {
        images: [],
        myVote: null
      }
    },
    methods: {
      vote(imageId) {
        this.myVote = imageId
        this.loadGallery()

        // this.images.find(x => x = imageId)

        this.$http.get(
          'https://cam-fight-server.herokuapp.com/api/vote/add.php',
          {
            params: {
              competitionId: 1,
              challengeId:   1,
              imageId:       imageId,
              teamId:        this.$cookies.get('team')
            }
          }
        ).then(
          response => {
            this.challenge = response.data
          },
          response => {
            alert('\t\t⚡⚡⚡\n☹  Vote not work. So sad!  ☹\n\t\t⚡⚡⚡')
          })
      },
      loadGallery() {
        this.$http.get(
          'https://cam-fight-server.herokuapp.com/api/image/list.php',
          {
            params: {
              competitionId: 1,
              challengeId:   1,
              teamId:        this.$cookies.get('team')
            }
          }
        ).then((response) => {
          this.images = response.data
        })
      }
    },
    created() {
      this.loadGallery()
    }
  }
</script>
