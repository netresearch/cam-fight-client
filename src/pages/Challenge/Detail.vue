<template>
  <v-slide-x-reverse-transition>
    <v-content>
      <v-card>
        <v-card-media :src="image.path" v-touch="{right: () => goBack()}" :class="team" style="min-height: 280px">
          <v-layout column class="media">
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
              <form v-if="isImageLoaded">
                <upload-button id="image" icon="camera_alt" :selectedCallback="submitForm" class="upload"></upload-button>
              </form>
              <v-progress-circular v-else indeterminate :size="50" class="mt-5" color="white"></v-progress-circular>
            </div>
          </v-layout>
        </v-card-media>
        <v-card-title v-if="challenge.title" class="headline pb-2">{{ challenge.title }}</v-card-title>
        <v-card-text v-if="challenge.desciption" class="pt-0">{{ challenge.desciption }}</v-card-text>
      </v-card>

      <v-content>
        <ChallengeGallery></ChallengeGallery>
      </v-content>
    </v-content>
  </v-slide-x-reverse-transition>
</template>

<script>
  import UploadButton from '@/components/UploadButton'
  import ChallengeGallery from '@/components/ChallengeGallery'

  export default {
    components: {
      ChallengeGallery,
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
        let cropper = 'https://ce86a502c.cloudimg.io/crop/800x700/x/'
        this.image.path = cropper + this.image.path
        this.isImageLoaded = true
      })
    },
    data() {
      return {
        challenge:          {
          id:          '',
          title:       '',
          subtitle:    '',
          description: '',
          bgColor:     ''
        },
        image:              '',
        isImageLoaded:      false,
        isChallengeStarted: false,
        isVotingStarted:    false

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
                alert('\t\t⚡⚡⚡\n☹  Image upload not work. So sad!  ☹\n\t\t⚡⚡⚡')
              })
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


  .button-file {
    height: 300px !important;
    width: 95%;
  }

  .media {
    height: 100%;
    margin: 0;
  }
</style>
