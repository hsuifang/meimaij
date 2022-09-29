<script setup>
import { useCartStore } from '../stores/cart'

const showOffcanvas = ref(false)
const navbarToggle = ref(false)
// route change
const route = useRoute()

// cart
const $store = useCartStore()
watch(
  () => route.path,
  () => {
    showOffcanvas.value = false
  }
)
</script>

<template>
  <nav
    class="bg-white navbar navbar-expand-md navbar-light border-bottom border-primary shadow-sm is-narrow sticky-top py-3"
  >
    <div class="container">
      <div class="d-flex">
        <router-link to="/" class="navbar-brand">MEIMAIJ</router-link>
        <div class="d-none d-md-block ms-3">
          <ul class="navbar-nav mt-2 mt-md-0">
            <!-- <li class="nav-item mx-1">
              <a class="nav-link" href="#">關於我們</a>
            </li> -->
            <li class="nav-item mx-1">
              <router-link to="/" class="nav-link" aria-current="page">首頁</router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link :to="{ name: 'shop-list' }" class="nav-link">產品</router-link>
            </li>
          </ul>
        </div>
      </div>

      <ul class="d-none d-md-flex">
        <li class="mx-1" @click.prevent="$router.push({ name: 'favorite' })">
          <a href="#" class="text-primary" @click.prevent="$router.push({ name: 'favorite' })">
            <SvgIcon name="favorite" width="24" height="24" />
          </a>
        </li>
        <li class="mx-1">
          <a href="#" @click.prevent="showOffcanvas = true">
            <SvgIcon name="cart" width="24" height="24" />
            <p class="position-absolute bg-primary text-white rounded-circle navbar-cart">
              {{ $store.volume > 99 ? 99 : $store.volume }}
            </p>
          </a>
        </li>
        <li class="mx-1">
          <a href="#" @click.prevent="$router.push({ name: 'orders' })">
            <SvgIcon name="portfolio" width="24" height="24" />
          </a>
        </li>
      </ul>

      <button
        class="navbar-toggler d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="navbarToggle = !navbarToggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="mobile-collapse d-lg-none" :class="{ show: navbarToggle }">
      <ul class="navbar-nav navbar-nav-scroll p-4">
        <li class="nav-item me-3">
          <router-link to="/" class="nav-link" aria-current="page">首頁</router-link>
        </li>
        <li class="nav-item me-3">
          <router-link :to="{ name: 'shop-list' }" class="nav-link">產品</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <AppOffcanvas v-model="showOffcanvas" title="購物車">
    <TheCart />
  </AppOffcanvas>
</template>

<style lang="scss">
.navbar-cart {
  font-size: 10px;
  padding: 0.4ch 1ch;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -130%);
}
</style>
