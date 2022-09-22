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
    products: (state) => state.items,
    filterByName: () => (name, val) => this.products.filter((item) => item[name].match(val)),
    filterProductByRule() {
      return (search) => {
        const { searchName, category } = search
        if (!searchName) return this.products.sort((a, b) => (a.price > b.price ? 1 : -1))
        return this.filterByName('title', searchName)
          .filter((item) => item.category.includes(category))
          .sort((a, b) => (a.price > b.price ? 1 : -1))
      }
    },
    randomProductsByNum(state) {
      return function (getMaxLength = 1) {
        const productAllLength = state.items.length
        if (!state.items || !productAllLength) return []
        const productSet = []
        let results = []
        for (let i = 0; results.length < getMaxLength; i += 1) {
          const randomIdx = randomFloorNum(getMaxLength)
          if (!productSet.includes(randomIdx)) {
            productSet.push(randomIdx)
            results.push(state.items[randomIdx])
          }
        }
        return results
      }
    },
    categoriesInfo: (state) => {
      const categories = [...new Set(state.items.map((item) => item.category))]
      const categoriesEachCounts = categories.map((category) => ({
        name: category,
        count: state.items.filter((i) => i.category === category).length,
      }))
      return [{ name: '全部', count: state.items.length }, ...categoriesEachCounts]
    },
  },
  actions: {
    async fetchValidProducts() {
      try {
        const res = await apiGetProductsAll()
        const { products, success } = res.data
        if (success) {
          this.items = products.map((product) => ({
            ...product,
            statusPos: product.statusType === '熱門' ? 'vr' : 'vl',
          }))
        }
      } catch (error) {
        // TODO
      }
    },
  },
})
