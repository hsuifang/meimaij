<script setup>
import { useCartStore } from '../stores/cart'

const props = defineProps({
  modelValue: Boolean,
})

// handle cart event
const $store = useCartStore()

const carts = computed(() => $store.carts)

const minusCartQty = (item) => {
  if (item.qty === 1) {
    $store.deleteItemFromCart({ cartId: item.id })
  } else {
    $store.updateCart({ cartId: item.id, productId: item.product.id, qty: item.qty - 1 })
  }
}

$store.fetchCartList()
</script>

<template>
  <div>
    <ul v-if="carts.length > 0">
      <li
        class="d-flex align-items-center py-4 px-3"
        :class="{ 'border-bottom': item !== 10 }"
        v-for="item in carts"
        :key="`${item}item`"
      >
        <div class="w-25">
          <img
            :src="item.product.imageUrl"
            alt="imageUrl"
            width="80"
            height="80"
            class="img-fluid me-3 obj-fit-contain"
          />
        </div>
        <div class="w-75 ms-3">
          <h3 class="h6 mb-1">{{ item.product.title }}</h3>
          <p class="fw-bold text-info">{{ item.product.price }}</p>
          <div class="d-flex justify-content-between align-items-end">
            <div class="fw-bold">
              <a href="#" class="pe-2" @click.prevent="minusCartQty(item)">
                <SvgIcon name="minus" width="16" height="16" />
              </a>
              <span class="fs-6">{{ item.qty }}</span>
              <a
                href="#"
                class="ps-2"
                @click.prevent="
                  $store.updateCart({
                    cartId: item.id,
                    productId: item.product.id,
                    qty: item.qty + 1,
                  })
                "
              >
                <SvgIcon name="plus" width="16" height="16" />
              </a>
            </div>
            <button
              type="button"
              class="btn btn-outline-info"
              @click="$store.deleteItemFromCart({ cartId: item.id })"
            >
              <SvgIcon name="trash" width="16" height="16" normal="white" />
            </button>
          </div>
        </div>
      </li>
    </ul>
    <p class="py-5" v-else>目前無產品</p>
    <div>
      <div class="offcanvas-footer">
        <div class="p-3">
          <p>
            購買<span class="text-secondary px-2">{{ carts.length }}</span
            >項產品
          </p>
          <h4 class="py-3">總共：{{ $store.price.final }}</h4>
          <template v-if="carts.length !== 0">
            <button type="button" class="btn btn-outline-primary btn-lg w-100 mb-3">購物車</button>
            <a href="#" class="btn btn-primary btn-lg w-100 text-white">直接購買</a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
