import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueNumericInput from 'vue-numeric-input';
import VueTyperPlugin from 'vue-typer'
import VueConfetti from 'vue-confetti'
import VueMq from 'vue-mq'
 
 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueNumericInput)
Vue.use(VueTyperPlugin)
Vue.use(VueConfetti)
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobil: 450,
    tablet: 1024,
    laptop: Infinity,
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
