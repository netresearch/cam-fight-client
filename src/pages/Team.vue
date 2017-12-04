<template>
  <v-container>
    <div class="text-xs-center">
      <h1>Team</h1>
      <v-menu offset-y full-width close-on-click>
        <v-btn color="primary" dark slot="activator">Select your team</v-btn>
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" @click="">
            <v-list-tile-title @click="setTeam(item.value)">{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </v-container>
</template>
<script>
  export default {
    data:    () => ({
      items: [
        { title: 'Team blue', value: 'blue' },
        { title: 'Team yellow', value: 'yellow' },
        { title: 'Team red', value: 'red' },
        { title: 'Team orange', value: 'orange' },
        { title: 'Team brown', value: 'brown' },
        { title: 'Team green', value: 'green' },
        { title: 'Team purple', value: 'purple' },
        { title: 'Team cyan', value: 'cyan' },
        { title: 'Team black', value: 'black' },
        { title: 'Team white', value: 'white' }
      ]
    }
    ),
    created() {
      if (!this.$cookies.get('user')) {
        this.$cookies.set('user', new Date().getTime())
      }
    },
    methods: {
      setTeam(value) {
        this.$cookies.set('team', value)
        this.$router.push('/challenge/list')
      }
    }
  }
</script>
