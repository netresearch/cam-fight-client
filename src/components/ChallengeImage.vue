<template>
  <img :src="image.path" :width="width" :height="height">
</template>

<script>
  // https://admin-v3.cloudimg.io/admin/project/settings
  export default {
    name:  'ChallengeImage',
    data() {
      return {
        image: ''
      }
    },
    props: {
      teamId:      {
        type: String
      },
      challengeId: {
        type:     String,
        required: true
      },
      operation:   {
        type:    String,
        default: 'crop'
      },
      width:       {
        type:     String,
        required: true
      },
      height:      {
        type:     String,
        required: true
      }
    },
    created() {
      this.$http.get(
        'https://cam-fight-server.herokuapp.com/api/image/show.php',
        {
          params: {
            id:          1,
            teamId:      this.teamId || this.$cookies.get('team'),
            challengeId: this.challengeId
          }
        }
      ).then((response) => {
        this.image = response.data
        let cropper = 'https://ce86a502c.cloudimg.io/' + this.operation + '/' + this.width + 'x' + this.height + '/x/'
        this.image.path = cropper + this.image.path
      })
    }
  }
</script>
