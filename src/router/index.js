import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import apparel from '@/pages/apparel';
import blog from '@/pages/blog';
import cart from '@/pages/cart';
import about from '@/pages/about';
import home from '@/pages/home';

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
          path: '',
          name: 'home',
          component: home,
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
