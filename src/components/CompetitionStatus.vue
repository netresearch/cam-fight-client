<template>
  <v-content>
    <v-progress-linear :value="timerCompetition" height="20" color="primary"></v-progress-linear>
    <v-progress-linear :value="timerVoting" height="20" color="error"></v-progress-linear>
  </v-content>
</template>

<script>
  export default {
    name:    'CompetitionStatus',
    data() {
      return {
        competition:      {},
        timerCompetition: 100,
        timerVoting:      100
      }
    },
    created() {
      this.$http.get(
        'https://cam-fight-server.herokuapp.com/api/competition/show.php',
        {
          params:
            { id: 1 }
        }
      ).then((response) => {
        this.competition = response.data
        this.timerCompetition = this.calcTimeLeftInPercent(
          this.competition.startChallenges,
          this.competition.stopChallenges
        )
        this.timerVoting = this.calcTimeLeftInPercent(
          this.competition.startVotes,
          this.competition.stopVotes
        )
      })
    },
    methods: {
      calcTimeLeftInPercent(start, end) {
        let now = Math.round(Date.now() / 1000)
        if (now < start) {
          return 0
        } else if (now > end) {
          return 100
        }
        let length = end - start
        let rest = end - now
        let percent = 100 - Math.round(rest / length * 100)
        return percent
      }
    }
  }
</script>

<style>
  .progress-linear {
    margin: 0 !important;
  }
</style>
