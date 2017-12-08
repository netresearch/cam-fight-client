<template>
  <v-app>
    <router-view></router-view>
    <Portrait></Portrait>
    <div v-if="isCompetitionRunning"></div>
    <div v-if="isVotingRunning"></div>
  </v-app>
</template>

<script>
  import Portrait from '@/components/Portrait'

  export default {
    components: {
      Portrait
    },

    data:     function() {
      return {
        title:                'CamFight',
        isCompetitionRunning: false,
        isVotingRunning:      false,
        competition:          null
      }
    },

    created() {
      if (!this.$cookies.isKey('team')) {
        this.$router.push({ name: 'Team' })
      }
      this.getCompetition()
    },

    methods:  {
      watchStatus() {
        setInterval(() => {
          this.isCompetitionRunning = this.isRunning(
            this.competition.startChallenges,
            this.competition.stopChallenges
          )
          this.isVotingRunning = this.isRunning(
            this.competition.startVotes,
            this.competition.stopVotes
          )
        }, 20000)
      },
      isRunning(start, end) {
        let now = Math.round(Date.now() / 1000)
        console.log(now, start, end)
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
            this.competition = response.data
            this.watchStatus()
          },
          response => {
            alert('\n☹  Vote not work. So sad!  ☹\n')
          })
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
