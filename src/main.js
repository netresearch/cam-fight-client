// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VueCookies from 'vue-cookies'
import VueUpload from '@websanova/vue-upload'

Vue.use(Vuetify, {
  theme: {
    primary:   '#976DD0',
    secondary: '#b0bec5',
    accent:    '#8c9eff',
    error:     '#b71c1c'
  }
})

Vue.use(VueCookies)
Vue.use(VueResource)
Vue.use(VueUpload)

// index.js or main.js
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue(
  {
    el:         '#app',
    router,
    template:   '<App/>',
    components: {App}
  })
