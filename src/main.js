import Vue from 'vue'
import App from './App.vue'


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
  routes: Routes,
  mode: "history"
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
