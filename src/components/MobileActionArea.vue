<script setup>
import { useCartStore } from '../stores/cart'

// cart
const $store = useCartStore()
</script>

<template>
  <div class="container bg-primary position-fixed bottom-0 py-2" style="z-index: 2">
    <div class="row">
      <div class="col">
        <button
          class="btn btn-primary text-white w-100 d-flex align-items-center justify-content-center"
          type="button"
          @click="$router.push({ name: 'cart' })"
        >
          <SvgIcon
            name="cart"
            width="20"
            height="20"
            color="#feebeb"
            :need-hover="false"
            class="me-2"
          />
          <span>購物車 | {{ $store.volume }} |</span>
        </button>
      </div>
      <div class="col">
        <button
          class="btn btn-primary text-white w-100 d-flex align-items-center justify-content-center"
          type="button"
          @click="$router.push({ name: 'favorite' })"
        >
          <SvgIcon
            name="favorite-fill"
            width="20"
            height="20"
            color="#feebeb"
            :need-hover="false"
            class="me-2"
          />
          <span>我的最愛</span>
        </button>
      </div>
    </div>
  </div>
</template>
