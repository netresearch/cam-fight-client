// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VueCookies from 'vue-cookies'

Vue.use(Vuetify)
Vue.use(VueCookies)
Vue.use(VueResource)

// index.js or main.js
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:         '#app',
  router,
  template:   '<App/>',
  components: { App }
})
