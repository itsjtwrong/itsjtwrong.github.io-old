import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import apparel from '@/pages/apparel';
import blog from '@/pages/blog';
import cart from '@/pages/cart';
import admin from '@/pages/admin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/apparel',
      name: 'apparel',
      component: apparel,
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
    },
    {
      path: '/apparel/cart',
      name: 'cart',
      component: cart,
    },
    {
      path: '/apparel/admin',
      name: 'admin',
      component: admin,
    },
  ],
});
