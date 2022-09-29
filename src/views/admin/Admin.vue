<script setup>
import { apiCheckUser, apiLogout } from '@/api'
import JWT from '@/api/cookies'
import useLoading from '../../composable/useLoading'
// loading
const { toggleLoading } = useLoading()

const isAuthenticated = ref(false)

// router
const $router = useRouter()

const checkLogin = async () => {
  toggleLoading(true)
  const token = JWT.getToken()
  if (token) {
    try {
      const res = await apiCheckUser(token)
      const { success } = res.data
      if (success) {
        isAuthenticated.value = true
      } else {
        $router.push({ name: 'login' })
      }
    } catch (error) {
      // this.$vErrorNotice()
    }
  } else {
    $router.push({ name: 'login' })
  }
  toggleLoading(false)
}

const handleLogout = async () => {
  toggleLoading(true)
  try {
    const res = await apiLogout()
    if (res.data.success) {
      JWT.removeToken()
      isAuthenticated.value = false
      $router.push({ name: 'login' })
    }
  } catch (error) {
    // this.$vErrorNotice()
  }
  toggleLoading(false)
}

checkLogin()
</script>

<template>
  <div class="back bg-logo min-vh-100">
    <div class="container py-5">
      <ul class="nav justify-content-center align-items-center">
        <li class="nav-item"><router-link class="nav-link" to="/">回到前台</router-link></li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/orders">訂單</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="handleLogout">登出</a>
        </li>
      </ul>
      <router-view v-if="isAuthenticated"></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.back {
  .router-link-exact-active {
    font-weight: bold;
    border-bottom: 3px solid #7e4c4f;
  }
}
</style>
