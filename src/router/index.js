import Vue from 'vue';
import VueRouter from 'vue-router';
import Huaban_8 from '../pages/huaban_8/huaban_8.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'huaban_8',
    component: Huaban_8,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;