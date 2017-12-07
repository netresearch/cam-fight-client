<template>
  <v-app>
    <router-view></router-view>
    <Portrait></Portrait>
  </v-app>
</template>

<script>
  import Portrait from '@/components/Portrait'

  export default {
    data:     function() {
      return {
        title: 'CamFight'
      }
    },
    computed: {
      isCompetitionRunning() {
        return true
      },
      isVotingRunning() {
        return true
      }
    },
    created() {
      if (!this.$cookies.isKey('team')) {
        this.$router.push({ name: 'Team' })
      }
      this.watchStatus()
    },
    methods:  {
      watchStatus() {
        setInterval(() => {
          if (!this.isCompetitionRunning && !this.isVotingRunning) {
            console.log('Info')
          }
        }, 200000)
      },
      isRunning(start, end) {
        let now = Math.round(Date.now() / 1000)
        if (now < start && now > end) {
          return false
        }
        return true
      },
      getCompetition() {
        this.$http.get(
          'https://cam-fight-server.herokuapp.com/api/competition/show.php',
          {
            params: { id: 1 }
          }
        ).then(
          response => {
            this.challenge = response.data
          },
          response => {
            alert('\n☹  Vote not work. So sad!  ☹\n')
          })
      },
      back() {
        this.$router.go(-1)
      }
    },

    components: {
      Portrait
    }
  }
</script>
