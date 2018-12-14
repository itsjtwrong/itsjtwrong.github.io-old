import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import apparel from '@/pages/apparel';
import blog from '@/pages/blog';
import cart from '@/pages/cart';
import about from '@/pages/about';
import home from '@/pages/home';
import collection from '@/pages/collection';

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
      redirect: 'apparel/home',
      children: [
        {
          path: 'cart',
          name: 'cart',
          component: cart,
        },
        {
          path: 'about',
          name: 'about',
          component: about,
        },
        {
          path: 'home',
          name: 'home',
          component: home,
        },
        {
          path: 'collection/:id',
          name: 'collection',
          component: collection,
        },
      ],
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
    },
  ],
});
