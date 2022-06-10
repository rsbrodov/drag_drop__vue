import Vue from 'vue'
import App from './App.vue'
import './assets/styles.scss'
import router from './router'
import Sortable from 'vue-sortable'
import { BootstrapVueIcons } from 'bootstrap-vue'
import FlashMessage from '@smartweb/vue-flash-message';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
window.$ = require('jquery')
window.JQuery = require('jquery')


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(FlashMessage);
Vue.use(Sortable);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
