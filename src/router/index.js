import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Presentation from '@/pages/Presentation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/presentation',
      name: 'Presentation',
      component: Presentation,
    },
  ],
});
