<template>
  <v-slide-x-reverse-transition>
    <v-card>
      <v-card-media :src="image.path" v-touch="{right: () => goBack()}" :class="team">
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
          <div class="text-xs-center">
            <form>
              <upload-button id="image" icon="image" :selectedCallback="submitForm" class="upload"></upload-button>
            </form>
          </div>
        </v-layout>
      </v-card-media>
      <v-container>
        <v-card-title v-if="challenge.title" class="headline">
          {{ challenge.title }}
        </v-card-title>
        <v-card-text v-if="challenge.desciption">
          {{ challenge.desciption }}
        </v-card-text>
      </v-container>
    </v-card>
  </v-slide-x-reverse-transition>
</template>

<script>
  import UploadButton from '@/components/UploadButton'

  export default {
    components: {
      UploadButton
    },
    created() {
      // Challenge
      this.$http.get(
        'https://cam-fight-server.herokuapp.com/api/challenge/show.php',
        {
          params:
            { id: this.$route.params.id }
        }
      ).then((response) => {
        this.challenge = response.data
      })

      // Image
      this.$http.get(
        'https://cam-fight-server.herokuapp.com/api/image/show.php',
        {
          params:
            { id: 1 }
        }
      ).then((response) => {
        this.image = response.data
        let cropper = 'https://ce86a502c.cloudimg.io/crop/800x600/x/'
        this.image.path = cropper + this.image.path
        console.log(this.image.path)
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
        image:     ''
      }
    },
    computed:   {
      team() {
        return this.$cookies.get('team')
      }
    },
    methods:    {
      submitForm: function(file) {
        let formData = {
          teamId:      this.team,
          challengeId: this.challenge.id,
          image:       file
        }

        this.$http.post('https://cam-fight-server.herokuapp.com/api/image/add.php', formData)
            .then(
              response => {
                // get status
                console.log(response.status)

                // get status text
                console.log(response.statusText)

                // get 'Expires' header
                console.log(response.headers.get('Expires'))

                // get body data
                console.log(response.body)
                console.log('success')
              }, response => {
                console.error('Error on uploading image')
              })
      },
      fileSelectedFunc(e) {
        console.log(e)
      },
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

  .button-file {
    height: 300px !important;
    width: 95%;
  }

  .media {
    height: 100%;
    margin: 0;
  }
</style>
