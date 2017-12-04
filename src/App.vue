<template>
  <v-app>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-btn icon @click.stop="back()">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <nav>
              <ul>
                <li>
                  <router-link to="/"> Introduction </router-link>
                </li>
                <li>
                  <router-link to="/team"> team selection </router-link>
                </li>
                <li>
                  <router-link to="/challenge/list"> Challenge - List </router-link>
                </li>
                <li>
                  <router-link to="/voting/list"> Voting - List </router-link>
                </li>
                <li>
                  <router-link to="/help"> Help </router-link>
                </li>
              </ul>
            </nav>
            <router-view></router-view>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data:    function () {
      return {
        clipped:     false,
        drawer:      true,
        fixed:       false,
        items:       [
          { icon: 'bubble_chart', title: 'Inspire', href: '/dirk' }
        ],
        miniVariant: false,
        right:       true,
        rightDrawer: false,
        title:       'CamFight'
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
