<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello World Component</h2>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
