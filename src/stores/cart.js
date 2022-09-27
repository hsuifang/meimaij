import { defineStore } from 'pinia'
import { apiGetCartList, apiAddCart, apiDeleteCart, apiDeleteAllCart, apiUpdateCart } from '@/api'

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
        // this.$vErrorNotice();
      }
    },
    async addToCart({ productId, qty }) {
      try {
        const res = await apiAddCart({ id: productId, qty })
        if (res.data.success) {
          this.fetchCartList()
        }
      } catch (error) {
        // this.$vErrorNotice();
      }
    },
    async updateCart({ cartId, productId, qty }) {
      try {
        const res = await apiUpdateCart({ cartId, productId, qty })
        const { success } = res.data
        if (success) {
          this.fetchCartList()
        }
      } catch (error) {
        //
      }
    },
    async deleteItemFromCart({ cartId }) {
      try {
        const res = await apiDeleteCart(cartId)
        const { success } = res.data
        if (success) {
          this.fetchCartList()
        }
      } catch (error) {
        // this.$vErrorNotice();
        // this.$vLoading(false);
      }
    },
    async deleteAllCart() {
      try {
        const res = await apiDeleteAllCart()
        const { success } = res.data
        if (success) {
          this.items = []
          this.fetchCartList()
        } else {
          // this.$vHttpsNotice(res, '刪除所有購物車');
        }
      } catch (error) {
        // this.$vErrorNotice();
        // this.$vLoading(false);
      }
    },
  },
})
