import { defineStore } from 'pinia'
import { apiGetCartList, apiAddCart, apiDeleteCart, apiDeleteAllCart, apiUpdateCart } from '@/api'
import useNotifications from '../composable/useNotifications'
import useLoading from '../composable/useLoading'
import { reduce } from 'lodash'
// loading
const { toggleLoading } = useLoading()

// notify
const { addNotifications } = useNotifications()

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
    price: {
      total: 0,
      final: 0,
    },
  }),
  getters: {
    carts: (state) => state.items,
    volume: (state) => reduce(state.items, (acc, item) => item.qty + acc, 0),
  },
  actions: {
    async fetchCartList() {
      try {
        const res = await apiGetCartList()
        const { success, data } = res.data
        if (success) {
          this.items = data.carts
          this.price.total = data.total
          this.price.final = data.final_total
        }
      } catch (error) {
        const message = error.response?.message || '系統發生異常'
        addNotifications({ message, type: 'error' })
      }
    },
    async addToCart({ productId, qty }) {
      try {
        const res = await apiAddCart({ id: productId, qty })
        const { success, message } = res.data
        if (success) {
          this.fetchCartList()
          addNotifications({ message, type: 'success' })
        }
      } catch (error) {
        const message = error.response?.message || '系統發生異常'
        addNotifications({ message, type: 'error' })
      }
    },
    async updateCart({ cartId, productId, qty }) {
      try {
        const res = await apiUpdateCart({ cartId, productId, qty })
        const { success, message } = res.data
        if (success) {
          this.fetchCartList()
          addNotifications({ message, type: 'success' })
        }
      } catch (error) {
        const message = error.response?.message || '系統發生異常'
        addNotifications({ message, type: 'error' })
      }
    },
    async deleteItemFromCart({ cartId }) {
      toggleLoading(true)
      try {
        const res = await apiDeleteCart(cartId)
        const { success } = res.data
        if (success) {
          this.fetchCartList()
        }
      } catch (error) {
        const message = error.response?.message || '系統發生異常'
        addNotifications({ message, type: 'error' })
      }
      toggleLoading(false)
    },
    async deleteAllCart() {
      toggleLoading(true)
      try {
        const res = await apiDeleteAllCart()
        const { success } = res.data
        if (success) {
          this.items = []
          this.fetchCartList()
          addNotifications({ message: '刪除所有購物車成功', type: 'success' })
        } else {
          addNotifications({ message: '刪除所有購物車異常', type: 'danger' })
        }
      } catch (error) {
        const message = error.response?.message || '系統發生異常'
        addNotifications({ message, type: 'error' })
      }
      toggleLoading(false)
    },
  },
})
