import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Sortable from 'vue-sortable'
import JQuery from 'jquery'
import { BootstrapVueIcons } from 'bootstrap-vue'
window.$ = window.JQuery = JQuery;

//import 'popper.js'
//import 'bootstrap'
//import 'bootstrap.scss'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
/*import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'*/

Vue.config.productionTip = false;
Vue.use(Sortable);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
