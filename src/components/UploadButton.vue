<template>
  <v-btn flat color="white" class="button-file">
    <span v-if="title">{{ title }}</span>
    <v-icon x-large dark>{{ icon }}</v-icon>
    <input :id="id" :name="id" type="file" accept="image/*" @change="fileSelected">
  </v-btn>
</template>

<script>
  export default {
    name:    'upload-button',
    props:   {
      selectedCallback: Function,
      title:            String,
      id:               String,
      icon:             String
    },
    methods: {
      fileSelected(e) {
        if (this.selectedCallback) {
          if (e.target.files[0]) {
            this.selectedCallback(e.target.files[0])
          } else {
            this.selectedCallback(null)
          }
        }
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
