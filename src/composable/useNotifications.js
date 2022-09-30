import { reactive } from 'vue'
const notifications = reactive({ data: [] })

const addNotifications = ({ message, timeout = 3000, type }) => {
  const id = Math.random + Date.now()
  notifications.data.push({
    id,
    message,
    type,
  })
  if (timeout) {
    setTimeout(() => removeNotifications(id), timeout)
  }
}

const removeNotifications = (id) => {
  const index = notifications.data.findIndex((item) => item.id === id)
  notifications.data.splice(index, 1)
}

const removeAll = () => {
  notifications.data = []
}

export default function useNotifications() {
  return {
    notifications,
    addNotifications,
    removeNotifications,
    removeAll,
  }
}
