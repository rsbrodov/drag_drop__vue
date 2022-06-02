import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Sortable from 'vue-sortable'
//import draggable from 'vuedraggable'

Vue.config.productionTip = false;
Vue.use(Sortable);
//Vue.use(draggable);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
