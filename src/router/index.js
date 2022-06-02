import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DragDrop from '../components/drag_drop/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/drag-drop',
    name: 'DragDrop',
    component: DragDrop
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
