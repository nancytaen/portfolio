import Vue from 'vue'
import App from './App.vue'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faMapMarker, faFlask } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook, faPython, faVuejs, faHtml5, faBootstrap, faCuttlefish } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone, faEnvelope, faMapMarker, faGithub, faLinkedin, faFacebook, faPython, faVuejs, faHtml5, faBootstrap, faFlask, faCuttlefish)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false


// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  render: h => h(App)
}).$mount('#app')
