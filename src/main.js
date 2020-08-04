import Vue from 'vue'
import App from './App.vue'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone, faEnvelope, faMapMarker, faGithub, faLinkedin, faFacebook)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false


// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// vue router
import VueRouter from 'vue-router'
import Routes from './routes.js'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
