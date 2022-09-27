<script setup>
const showOffcanvas = ref(false)
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
            <li class="nav-item mx-1">
              <a class="nav-link" href="#">關於我們</a>
            </li>
            <li class="nav-item mx-1">
              <router-link :to="{ name: 'shop-list' }" class="nav-link">產品</router-link>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" href="#">聯絡我們</a>
            </li>
          </ul>
        </div>
      </div>

      <ul class="d-none d-md-flex">
        <li class="mx-1">
          <a href="#">
            <SvgIcon name="favorite" width="24" height="24" />
          </a>
        </li>
        <li class="mx-1">
          <a href="#" @click.prevent="showOffcanvas = true">
            <SvgIcon name="cart" width="24" height="24" />
          </a>
        </li>
        <li class="mx-1">
          <SvgIcon name="portfolio" width="24" height="24" />
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
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <AppOffcanvas v-model="showOffcanvas" title="購物車">
    <TheCart />
  </AppOffcanvas>
</template>

<style></style>
