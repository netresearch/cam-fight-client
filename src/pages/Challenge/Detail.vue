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
            <div class="text-xs-center" v-if="isCompetitionRunning">
              <form v-if="isImageDataLoaded">
                <upload-button id="image"
                               icon="camera_alt"
                               :teamId="team"
                               :uploadCallback="loadImage"
                               class="upload"></upload-button>
              </form>
              <v-progress-circular v-else indeterminate :size="50" class="mt-5" color="white"></v-progress-circular>
            </div>
          </v-layout>
        </v-card-media>
        <v-card-title v-if="challenge.title" class="headline pb-2">{{ challenge.title }}</v-card-title>
        <v-card-text v-if="challenge.description" class="pt-0" v-html="challenge.description"></v-card-text>
        <v-card-text>
          <v-alert outline :color="team" icon="info" :value="true" v-if="isCompetitionRunning">
            Your team is {{ team }}
          </v-alert>
          <v-alert outline color="primary" icon="info" :value="true" v-if="isVotingRunning">
            <strong>Voting time!</strong><br>You can't vote for your own team.
          </v-alert>
        </v-card-text>
      </v-card>
      <ChallengeGallery v-if="isVotingRunning"></ChallengeGallery>
    </v-content>
  </v-slide-x-reverse-transition>
</template>

<script>
  import UploadButton from '@/components/UploadButton'
  import ChallengeGallery from '@/components/ChallengeGallery'

  export default {
    props: [
      'isCompetitionRunning',
      'isVotingRunning'
    ],
    components: {
      ChallengeGallery,
      UploadButton
    },
    created() {
      this.loadChallenge()
      this.loadImage()
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
        isImageDataLoaded:  false,
        isChallengeStarted: false,
        isVotingStarted:    false
      }
    },
    computed:   {
      team() {
        return this.$cookies.get('team')
      },
      challengeId() {
        return this.$route.params.id
      }
    },
    methods:    {
      loadChallenge() {
        this.$http.get(
          'https://cam-fight-server.herokuapp.com/api/challenge/show.php',
          {
            params:
              { id: this.challengeId }
          }
        ).then(
          response => {
            this.challenge = response.data
          },
          response => {
            console.error('No competition found. So sad!')
          })
      },
      loadImage() {
        this.$http.get(
          'https://cam-fight-server.herokuapp.com/api/image/list.php',
          {
            params: {
              challengeId: this.challengeId,
              teamId:      this.team
            }
          }
        ).then(
          response => {
            this.isImageDataLoaded = true
            if (response.status === 204) {
              console.info('No image uploaded yet.')
            } else {
              this.image = response.data[0]
              let cropper = 'https://ce86a502c.cloudimg.io/crop/800x700/x/'
              this.image.path = cropper + this.image.path
            }
          },
          response => {
            this.isImageDataLoaded = true
            alert('\n☹  Image service not work. So sad!  ☹\n')
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
