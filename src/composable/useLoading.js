import { ref } from 'vue'
const isLoading = ref(false)

const toggleLoading = (state) => {
  isLoading.value = state
}

export default function useLoading() {
  return {
    isLoading,
    toggleLoading,
  }
}
