<script setup>
import useNotifications from '@/composable/useNotifications'
const { notifications, removeNotifications } = useNotifications()
</script>

<template>
  <transition-group name="notification">
    <div class="notifications" :key="$route.path">
      <div
        class="notification"
        :class="`notification-type-${notify.type}`"
        v-for="notify in notifications.data"
        :key="notify.id"
      >
        <span>{{ notify.message }}</span>
        <button type="button" @click="removeNotifications" class="btn btn-sm">x</button>
      </div>
    </div>
  </transition-group>
</template>

<style>
.notifications {
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 1;
}
.notification {
  background: white;
  display: flex;
  justify-content: space-between;
  width: 350px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  margin-bottom: 5px;
  border-left: 5px solid #ea8484;
}
.notification.notification-type-error {
  border-left: 5px solid #dc3545;
}
.notification.notification-type-success {
  border-left: 5px solid #198754;
}
.notification-enter-active,
.notification-leave-active {
  transition: all 0.5s ease;
}
.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.notification-move {
  transition: transform 0.8s ease;
}
</style>
