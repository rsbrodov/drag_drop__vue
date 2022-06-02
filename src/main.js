import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Sortable from 'vue-sortable'
import JQuery from 'jquery'
window.$ = window.JQuery = JQuery;

//import 'popper.js'
//import 'bootstrap'
//import 'bootstrap.scss'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(Sortable);
//Vue.use(draggable);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
