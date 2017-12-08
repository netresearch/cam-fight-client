<template>
  <form method="POST" enctype="multipart/form-data">
    <v-btn flat color="white" class="button-file">
      <span v-if="title">{{ title }}</span>
      <v-icon x-large dark color="green" v-if="isUploaded">check_circle</v-icon>
      <v-icon x-large dark color="red" v-else-if="isError">error</v-icon>
      <v-progress-circular v-else indeterminate :size="40" color="white" v-else-if="isLoading"></v-progress-circular>
      <v-icon x-large dark v-else>{{ icon }}</v-icon>
      <input :id="id" :name="id" type="file" accept="image/*" @change="upload" @click="uploadInProgress">
    </v-btn>
  </form>
</template>

<script>
  export default {
    name:    'upload-button',
    props:   {
      uploadCallback: Function,
      id:             String,
      title:          String,
      teamId:         String,
      icon:           String
    },
    data() {
      return {
        isUploaded:  false,
        isLoading:   false,
        isError:     false
      }
    },
    methods: {
      uploadInProgress() {
      },
      upload: function(e) {
        let file
        if (e.target.files[0]) {
          file = e.target.files[0]
        } else {
          return
        }

        this.isUploaded = false
        this.isError = false
        this.isLoading = true

        let formData = new FormData()
        formData.append('teamId', this.teamId)
        formData.append('challengeId', this.$route.params.id)
        formData.append('image', file)

        this.$http.post(
          'https://cam-fight-server.herokuapp.com/api/image/add.php',
          formData,
          {
            emulateJSON: true,
            headers:     {
              'Content-Type': 'multipart/form-data'
            }
          }).then(
          response => {
            console.info('success')
            this.isError = false
            this.isUploaded = true
            this.isLoading = false

            setTimeout(() => {
              this.isError = false
              this.isUploaded = false
              this.isLoading = false
            }, 3000)

            this.uploadCallback()
          },
          response => {
            this.isError = true
            this.isLoading = false
            console.log('☹  Image upload not work. So sad!  ☹')
          })
      }
    }
  }
</script>

<style scoped>
  .button-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    cursor: inherit;
    display: block;
  }
</style>
