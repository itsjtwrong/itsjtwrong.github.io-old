import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import apparel from '@/pages/apparel';
import blog from '@/pages/blog';
import cart from '@/pages/cart';
import admin from '@/pages/admin/index';
import New from '@/pages/admin/new';
import Edit from '@/pages/admin/edit';
import Products from '@/pages/admin/products';

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
          path: 'admin',
          name: 'admin',
          component: admin,
          children: [
            {
              path: 'new',
              name: 'New',
              component: New,
            },
            {
              path: '',
              name: 'Products',
              component: Products,
            },
            {
              path: 'edit/:id',
              name: 'Edit',
              component: Edit,
            },
          ],
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
