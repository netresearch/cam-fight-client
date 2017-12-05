<template>
  <v-content>
    <v-progress-linear :value="timerCompetition" height="30" color="primary"></v-progress-linear>
    <v-progress-linear :value="timerVoting" height="30" color="error"></v-progress-linear>
  </v-content>
</template>

<script>
  export default {
    name: 'Status',
    data() {
      return {
        competition:      {},
        timerCompetition: 100,
        timerVoting:      0
      }
    },
    created() {
      this.$http.get('https://cam-fight-server.herokuapp.com/api/challenge/list.php').then((response) => {
        this.items = response.data.records
      })

      this.$http.get(
        'https://cam-fight-server.herokuapp.com/api/competition/show.php',
        {
          params:
            {id: 1}
        }
      ).then((response) => {
        this.competition = response.data
        this.timerCompetition = this.calcTimeLeftInPercent(
          parseInt(this.competition.startChallenges),
          parseInt(this.competition.stopChallenges)
        )
        console.log(this.timerCompetition)
      })
    },
    methods: {
      calcTimeLeftInPercent(start, end) {
        let length = end - start
        let now = Math.round(Date.now() / 1000)
        let rest = end - now
        let percent = Math.round(rest / length * 100) * -1
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
