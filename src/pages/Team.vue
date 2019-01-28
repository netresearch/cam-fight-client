<template>
  <v-slide-x-transition>
    <v-app dark class='deep-purple'>
      <ChallengeStatusChecker></ChallengeStatusChecker>
      <v-content>
        <div class='text-xs-center'>
          <img src='/static/img/team_500.jpg' alt='Team selection' class='image text-xs-center'>
        </div>
      </v-content>

      <v-container>

        <div class='text-xs-center deep-purple'>

          <h1>Choose your team</h1>
          <p>Your side a team! Experience adventure together and make the best photo!</p>

          <v-menu offset-y full-width close-on-click dark>
            <v-btn class='white' light slot='activator'>Choose</v-btn>
            <v-list>
              <v-list-tile v-for='team in teams' :key='team.name' dark>
                <v-list-tile-title @click='setTeam(team['.key'])'>{{ team.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-container>
    </v-app>
  </v-slide-x-transition>
</template>

<script>
  import ChallengeStatusChecker from '@/components/ChallengeStatusChecker'
  import firebase from 'firebase'
  var config = {
    apiKey:            'AIzaSyBUyVpLi7S9CuzSTA-7S2VJ0rJ35qerx_8',
    authDomain:        'camfight-f749f.firebaseapp.com',
    databaseURL:       'https://camfight-f749f.firebaseio.com',
    projectId:         'camfight-f749f',
    storageBucket:     'camfight-f749f.appspot.com',
    messagingSenderId: '667647303062'
  }
  firebase.initializeApp(config)
  const db = firebase.firestore()
  export default {
    components: {
      ChallengeStatusChecker
    },
    data: {
      teams: []
    },
    firestore: {
      teams: db.collection('teams')
    },
    created() {
      if (!this.$cookies.isKey('user')) {
        this.$cookies.set('user', new Date().getTime())
      }
    },
    methods: {
      setTeam(value) {
        this.$cookies.set('team', value)
        this.$router.push('/challenge/list')
      }
    }
  }
</script>


<style>
  .image {
    max-width: 100%;
  }
</style>
