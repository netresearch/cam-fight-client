<template>
  <v-slide-x-transition>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar>
            <v-spacer></v-spacer>
            <v-toolbar-title>Challenges</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon @click="goHelp">help</v-icon>
          </v-toolbar>
          <status></status>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-tile :key="item.title" @click="goDetail(item.id)">
                <v-list-tile-avatar>
                  <img :src="images.image"/>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon :color="item.active ? 'teal' : 'grey'">chevron_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-slide-x-transition>
</template>

<script>
  import status from '@/components/Status'

  export default {
    created() {
      this.$http.get('https://cam-fight-server.herokuapp.com/api/challenge/list.php').then((response) => {
        this.items = response.data.records
      })
    },
    data() {
      return {
        items:  {},
        images: {
          image: 'http://via.placeholder.com/100x100?text=?'
        }
      }
    },
    components: {status},
    methods:    {
      goDetail(id) {
        this.$router.push(
          {
            name:   'ChallengeDetail',
            params: {
              id
            }
          }
        )
      },
      goHelp() {
        this.$router.push({name: 'Help'})
      }
    }
  }
</script>

<style>
  .list {
    padding-top: 0 !important;
  }
</style>
