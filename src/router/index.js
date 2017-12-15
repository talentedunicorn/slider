import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Html from '@/pages/Html';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/html',
      name: 'Html',
      component: Html,
    },
  ],
});
