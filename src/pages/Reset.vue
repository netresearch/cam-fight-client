<template>
  <div>
    <h1 class="text-xs-center">Reset successful</h1>
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
