<template>
  <div class="text-xs-center">
    <h1 class="text-xs-center">Reset successful</h1>
    <a href="/">Home</a>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$cookies.remove('user')
      this.$cookies.remove('team')
    }
  }
</script>
