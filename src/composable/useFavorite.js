import { filter, find } from 'lodash'
import { ref } from 'vue'

export function useFavorite() {
  const isFavorite = ref(false)
  const storageKey = 'meimaijlove'

  const getFavoriteProducts = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  const setFavoriteProduct = (key, value) => {
    localStorage.setItem(key, value)
  }

  const toggleFavorite = (product) => {
    const favoriteProducts = getFavoriteProducts(storageKey)
    if (!favoriteProducts) {
      setFavoriteProduct(storageKey, JSON.stringify([product]))
      isFavorite.value = true
    } else {
      if (find(favoriteProducts, (item) => item.id === product.id)) {
        const newFavorite = filter(favoriteProducts, (item) => item.id !== product.id)
        setFavoriteProduct(storageKey, JSON.stringify(newFavorite))
        isFavorite.value = false
      } else {
        setFavoriteProduct(storageKey, JSON.stringify([...favoriteProducts, product]))
        isFavorite.value = true
      }
    }

    // this.emitter.emit('notice-message', {
    //   style: 'success',
    //   title: `${this.isFavorite ? '加入' : '移除'}收藏`,
    // })
  }

  const initFavorite = (productId) => {
    const favoriteProducts = getFavoriteProducts(storageKey)
    const item = find(favoriteProducts, (item) => item.id === productId)

    if (find(favoriteProducts, (item) => item.id === productId)) {
      console.log(item)
      isFavorite.value = true
    }
  }

  return {
    isFavorite,
    toggleFavorite,
    initFavorite,
  }
}
