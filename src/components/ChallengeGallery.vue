<template>
  <v-layout column v-if="images">
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

              </v-card-media>

              <v-bottom-nav absolute :value="true" :active.sync="myVote" color="white">
                <v-spacer></v-spacer>
                <v-btn flat color="teal" :value="image.id" @click="vote(image.id)">
                  <span>Vote</span>
                  <v-badge :color="image.team">
                    <span slot="badge">{{image.votes}}</span>
                    <v-icon medium :color="image.team">favorite</v-icon>
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
    created() {
      this.loadGallery()
    },
    methods: {
      vote(imageId) {
        this.myVote = imageId
        this.loadGallery()

        let data = {
          'challengeId': this.$route.params.id,
          'imageId':     imageId,
          'userId':      this.$cookies.get('user')
        }

        console.log(data)
        this.$http.post(
          'https://cam-fight-server.herokuapp.com/api/image/upvote.php',
          data,
          {
            emulateJSON: true,
            headers:     {
              'Content-Type': 'multipart/form-data'
            }
          }).then(
          response => {
            console.log('success')
            this.loadGallery()
          },
          response => {
            console.log(response)
            alert('\n☹  Vote not work. So sad!  ☹\n')
          })
      },
      loadGallery() {
        this.$http.get(
          'https://cam-fight-server.herokuapp.com/api/image/list.php',
          {
            params: {
              competitionId:     1,
              challengeId:       this.$route.params.id,
              excludeTeamId:     this.$cookies.get('team')
            }
          }
        ).then((response) => {
          this.images = response.data
        })
      }
    }
  }
</script>
