import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Search from './components/Search.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Search, },
  { path: '/dashboard', component: Dashboard, props: true },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
