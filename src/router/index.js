import { createRouter, createWebHashHistory } from 'vue-router'
import useNotifications from '../composable/useNotifications'
import Layout from '../layout/TheLayout.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const { removeAll, notifications } = useNotifications()

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
          component: () => import('../views/user/ProductList.vue'),
          meta: { title: '產品列表' },
        },
        {
          path: '/shop-detail/:id',
          name: 'shop-detail',
          component: () => import('../views/user/ProductDetail.vue'),
          meta: { title: '產品明細' },
        },
        {
          path: '/cart',
          name: 'cart',
          meta: { title: '購物車' },
          component: () => import('../views/user/UserCart.vue'),
        },
        {
          path: '/checkout',
          name: 'checkout',
          meta: { title: '結帳' },
          component: () => import('../views/user/UserCheckout.vue'),
        },
        {
          path: '/order/:id',
          name: 'orderDetail',
          meta: { title: '訂單明細' },
          component: () => import('../views/user/UserOrderDetail.vue'),
        },
        {
          path: '/member',
          name: 'userCenter',
          component: () => import('../views/user/UserCenter.vue'),
          children: [
            {
              path: '',
              name: 'orders',
              meta: { title: '會員中心' },
              component: () => import('../views/user/UserOrderList.vue'),
            },
            {
              path: 'favorite',
              name: 'favorite',
              meta: { title: '會員中心' },
              component: () => import('../views/user/UserFavorite.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
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
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('../views/admin/TheOrders.vue'),
        },
        {
          path: 'coupons',
          name: 'admin-coupon',
          component: () => import('../views/admin/TheCoupons.vue'),
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

router.beforeEach((to, from) => {
  if (notifications.length) {
    removeAll()
  }
})

export default router
