<template>
  <section>
    <h1>Help</h1>
    <p>{{ help }}</p>
  </section>
</template>


<script>
  export default {
    created() {
      this.$http.get('http://cam-fight-server.herokuapp.com/api/help/show.php').then((response) => {
        console.log(response.data)
        this.help = response.data
      })
    },
    data() {
      return {
        help: {}
      }
    }
  }
</script>
