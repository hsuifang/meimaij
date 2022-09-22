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
          meta: { title: '首頁' },
        },
        {
          path: '/shop-list',
          name: 'shop-list',
          component: () => import('../views/ProductList.vue'),
          meta: { title: '產品列表' },
        },
        {
          path: '/shop-detail/:id',
          name: 'shop-detail',
          component: () => import('../views/ProductDetail.vue'),
          meta: { title: '產品明細' },
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: () => import('../views/UserCheckout.vue'),
        },
        {
          path: '/order/:id',
          name: 'orderDetail',
          component: () => import('../views/UserOrderDetail.vue'),
        },
        {
          path: '/member/order',
          name: 'orderDetail',
          component: () => import('../views/UserOrderList.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/admin',
      component: () => import('../views/admin/Admin.vue'),
      children: [
        {
          path: '',
          name: 'admin-product',
          component: () => import('../views/admin/TheProducts.vue'),
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router
