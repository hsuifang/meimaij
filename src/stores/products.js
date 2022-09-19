import { defineStore } from 'pinia'
import { apiGetProductsAll } from '@/api'

function randomFloorNum(max) {
  return Math.floor(Math.random() * max)
}

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    items: [],
  }),
  getters: {
    products() {
      return this.items
    },
    randomProductsByNum() {
      return function (getMaxLength = 1) {
        const productAllLength = this.items.length
        if (!this.items || !productAllLength) return []
        const productSet = []
        let results = []
        for (let i = 0; results.length < getMaxLength; i += 1) {
          const randomIdx = randomFloorNum(getMaxLength)
          if (!productSet.includes(randomIdx)) {
            productSet.push(randomIdx)
            results.push(this.items[randomIdx])
          }
        }
        return results
      }
    },
  },
  actions: {
    async fetchValidProducts() {
      try {
        const res = await apiGetProductsAll()
        const { products, success } = res.data
        if (success) {
          this.items = products.map((product) => ({ ...product, label: '新品' }))
        }
      } catch (error) {
        // TODO
      }
    },
  },
})
