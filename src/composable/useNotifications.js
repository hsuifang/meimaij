import { reactive } from 'vue'
const notifications = reactive([])

const addNotifications = ({ message, timeout = 3000, type }) => {
  const id = Math.random + Date.now()
  notifications.push({
    id,
    message,
    type,
  })
  if (timeout) {
    setTimeout(() => removeNotifications(id), timeout)
  }
}

const removeNotifications = (id) => {
  const index = notifications.findIndex((item) => item.id === id)
  notifications.splice(index, 1)
}

const removeAll = () => {
  notifications = reactive([])
}

export default function useNotifications() {
  return {
    notifications,
    addNotifications,
    removeNotifications,
    removeAll,
  }
}
