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
        type:     Number,
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
        'https://cam-fight-server.herokuapp.com/api/image/list.php',
        {
          params: {
            teamId:      this.teamId || this.$cookies.get('team'),
            challengeId: this.challengeId
          }
        }
      ).then(response => {
        this.image = response.data[0]
        let cropper = 'https://ce86a502c.cloudimg.io/' + this.operation + '/' + this.width + 'x' + this.height + '/x/'
        this.image.path = cropper + this.image.path
      }, response => {
        console.info('No image for competition uploaded yet .')
      })
    }
  }
</script>
