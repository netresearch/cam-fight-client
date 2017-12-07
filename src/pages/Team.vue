<template>
  <v-slide-x-transition>
    <v-app dark class="deep-purple">

      <v-content>
        <div class="text-xs-center">
          <img src="/static/img/team_500.jpg" alt="Team selection" class="image text-xs-center">
        </div>
      </v-content>

      <v-container>

        <div class="text-xs-center deep-purple">

          <h1>Choose your team</h1>
          <p>Your side a team! Experience adventure together and make the best photo!</p>

          <v-menu offset-y full-width close-on-click dark>
            <v-btn class="white" light slot="activator">Choose</v-btn>
            <v-list>
              <v-list-tile v-for="item in items" :key="item.title" @click="" dark>
                <v-list-tile-title @click="setTeam(item.value)">{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-container>
    </v-app>
  </v-slide-x-transition>
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
        { title: 'Team indigo', value: 'indigo' },
        { title: 'Team gray', value: 'gray' },
        { title: 'Team teal', value: 'teal' }
      ]
    }
    ),
    created() {
      if (this.$cookies.isKey('user')) {
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


<style>
  .image {
    max-width: 100%;
  }
</style>
