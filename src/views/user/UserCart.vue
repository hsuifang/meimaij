<script setup>
import { useCartStore } from '@/stores/cart'
import * as $filters from '@/common/filters'
// handle cart event
const $store = useCartStore()

// coupon
const couponCode = ref('')

// carts list
const columns = [
  { name: 'img', label: '圖片' },
  { name: 'title', label: '名稱' },
  { name: 'price', label: '金額' },
  { name: 'qty', label: '數量' },
  { name: 'trigger_btn', label: '刪除' },
]
const carts = computed(() => $store.carts)
const pageInfo = ref({
  currentPage: 1,
  totalPages: 1,
})
</script>
<template>
  <!-- 購物車 -->
  <div class="container pt-0 pb-4 pt-lg-3 py-lg-6">
    <PageTitle class="mt-3" />
    <div class="row my-2 my-4">
      <div class="col-lg-12">
        <div class="py-3 p-md-5 bg-white rounded border">
          <div v-if="carts.length > 0" class="d-flex justify-content-end mb-2">
            <button
              type="button"
              class="btn btn-outline-primary py-2"
              @click.prevent="$store.deleteAllCart"
            >
              刪除全部
            </button>
          </div>
          <AppTable :columns="columns" :values="carts" :pages="pageInfo">
            <template #img="{ data }">
              <img
                :src="data.product.imageUrl"
                alt="商品主要圖片"
                width="80"
                height="80"
                class="obj-fit-contain"
              />
            </template>
            <template #title="{ data }">
              <div class="p-2">
                <div class="ml-3 d-inline-block align-middle">
                  <h5 class="fs-8 fs-md-6 mb-0 text-dark">{{ data.product.title }}</h5>
                  <p class="d-none d-md-block fs-8 text-muted font-weight-normal fst-italic mb-2">
                    類別: {{ data.product.category }}
                  </p>
                  <div v-if="data.coupon" class="text-muted fs-8">
                    優惠券:
                    <span class="bg-primary text-white rounded-pill py-1 px-2 fs-8">
                      {{ data.coupon.code }}
                    </span>
                  </div>
                </div>
              </div>
            </template>
            <template #price="{ data }">
              <strong>{{ $filters.currency(data.product.price) }}</strong>
            </template>
            <template #qty="{ data }">
              <input
                type="number"
                class="form-control"
                v-model.number="data.qty"
                style="width: 80px"
                min="1"
                @change="
                  $store.updateCart({
                    cartId: data.id,
                    productId: data.product_id,
                    qty: data.qty,
                  })
                "
              />
            </template>
            <template #trigger_btn="{ data }">
              <button
                type="button"
                class="btn btn-outline-info"
                @click="$store.deleteItemFromCart({ cartId: data.id })"
              >
                <SvgIcon name="trash" width="16" height="16" />
              </button>
              <!-- <div
                v-if="loadingItem.pos === 'delItem' && loadingItem.id === item.id"
                class="position-absolute top-50 start-50"
              >
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div> -->
            </template>
          </AppTable>
          <div class="d-flex mb-3 mb-lg-0 mt-2">
            <input
              id="coupon"
              type="text"
              class="form-control me-2"
              style="width: 180px"
              v-model="couponCode"
            />
            <div>
              <button type="button" class="btn btn-secondary text-white" :disabled="!couponCode">
                <i class="bi bi-gift text-white me-2"></i>優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="text-end pt-2 pt-md-5 pb-3 border-bottom" v-if="carts.length > 0">
      <li class="mb-2 mb-md-4">小計: {{ $filters.currency($store.price.total) }}</li>
      <li class="mb-2 mb-md-4">
        折扣: {{ $filters.currency($store.price.total - $store.price.final) }}
      </li>
      <li class="mb-4">
        總計: <span class="fw-bold">{{ $filters.currency($store.price.final) }}</span>
      </li>
    </ul>
    <div class="d-flex justify-content-between py-3">
      <router-link class="btn btn-outline-secondary" to="shop-list">繼續購物</router-link>
      <router-link v-if="carts.length !== 0" class="btn btn-primary px-4 text-white" to="checkout"
        >結帳</router-link
      >
    </div>
  </div>
</template>
