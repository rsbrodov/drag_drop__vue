import Vue from 'vue'
import App from './App.vue'
import './assets/styles.scss'
import router from './router'
import Sortable from 'vue-sortable'
//import JQuery from 'jquery'
import { BootstrapVueIcons } from 'bootstrap-vue'
import FlashMessage from '@smartweb/vue-flash-message';
//window.$ = window.JQuery = JQuery;

window.$ = require('jquery')
window.JQuery = require('jquery')

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(FlashMessage);

Vue.config.productionTip = false;
Vue.use(Sortable);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
