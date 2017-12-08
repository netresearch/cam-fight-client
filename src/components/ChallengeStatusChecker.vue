<template>

</template>

<script>

export default {
  created() {
    this.checkTeamCookie()
  },
  methods: {
    checkTeamCookie() {
      if (this.$cookies.isKey('team')) {
        this.$router.push({ name: 'ChallengeList' })
      }
    }
  }
}
</script>
