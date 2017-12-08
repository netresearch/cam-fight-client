<template>
  <v-app>
    <router-view :isCompetitionRunning="isCompetitionRunning" :isVotingRunning="isVotingRunning"></router-view>
    <Portrait></Portrait>
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
        interval:             {},
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

    beforeDestroy() {
      clearInterval(this.interval)
    },

    methods:  {
      watchStatus() {
        this.interval = setInterval(() => {
          this.isCompetitionRunning = this.isRunning(
            this.competition.startChallenges,
            this.competition.stopChallenges
          )
          this.isVotingRunning = this.isRunning(
            this.competition.startVotes,
            this.competition.stopVotes
          )

          // Challenge
          if (!this.isCompetitionRunning &&
              (
                this.$route.path === '/challenge/list' ||
                this.$route.path === '/challenge/detail'
              )
          ) {
            this.$router.push({ name: 'Waiting' })
          }
        }, 2000)
      },

      isRunning(start, end) {
        let now = Math.round(Date.now() / 1000)

        if (now < start || now > end) {
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
