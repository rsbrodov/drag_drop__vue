import Vue from 'vue'
import VueRouter from 'vue-router'
import DragDrop from '../components/drag_drop/Index'
import Start from "../components/drag_drop/Start";
import Maket from "../components/drag_drop/Maket";

Vue.use(VueRouter);

const routes = [
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
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/maket',
    name: 'Maket',
    component: Maket
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
