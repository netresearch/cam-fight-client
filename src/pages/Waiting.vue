<template>
  <v-app dark>
    <v-container fluid fill-height class="primary">

      <v-layout flex align-center justify-center>
        <v-progress-circular
          :size="240"
          :width="3"
          :rotate="360"
          :value="value"
          color="white"
        >
          {{ value }}
        </v-progress-circular>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    props: ['competition', 'isCompetitionRunning', 'isVotingRunning'],
    data() {
      return {
        interval: {},
        value:    0
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
    },
    watch: {
      isCompetitionRunning(status) {
        if (status) {
          this.$router.push({ name: 'ChallengeList' })
        }
      },
      isVotingRunning(status) {
        if (status) {
          this.$router.push({ name: 'ChallengeList' })
        }
      }
    },
    mounted() {
      let now = Math.round(Date.now() / 1000)
      this.interval = setInterval(() => {
        this.value = this.calcTimeLeftInPercent(now, this.competition.startChallenges)
      }, 3000)
    },
    methods: {
      calcTimeLeftInPercent(start, end) {
        let now = Math.round(Date.now() / 1000)
        let length = end - start
        let rest = end - now
        let percent = 100 - Math.round(rest / length * 100)
        percent = (percent > 100) ? 100 : percent
        return percent
      }
    }
  }
</script>

<style>
  .progress-circular__info {
    font-size: 4em !important;
    font-weight: 100 !important;
  }
</style>
