import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/TheLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/shop-list',
          name: 'shop-list',
          component: () => import('../views/ProductList.vue'),
        },
        {
          path: '/shop-detail/:id',
          name: 'shop-detail',
          component: () => import('../views/ProductDetail.vue'),
        },
      ],
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
})

export default router
