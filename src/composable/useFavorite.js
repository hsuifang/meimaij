import { filter, find } from 'lodash'
import { ref } from 'vue'
import useNotifications from '../composable/useNotifications'
const { addNotifications } = useNotifications()

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
    addNotifications({
      message: `${isFavorite.value ? '加入' : '移除'}收藏成功`,
      type: 'success',
      timeout: 2000,
    })
  }

  const initFavorite = (productId) => {
    const favoriteProducts = getFavoriteProducts(storageKey)
    if (find(favoriteProducts, (item) => item.id === productId)) {
      isFavorite.value = true
    }
  }

  return {
    isFavorite,
    toggleFavorite,
    initFavorite,
  }
}
