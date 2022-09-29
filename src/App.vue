<script setup>
import useLoading from './composable/useLoading'

// loading
const { isLoading } = useLoading()
</script>
<template>
  <AppHead />
  <RouterView />
  <AppNotification />
  <AppSpinner v-if="isLoading" />
</template>

<style lang="scss">
@import '@/assets/base.css';
@import '@/assets/scss/index.scss';
</style>
