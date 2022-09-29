<script setup>
import { useCartStore } from '../stores/cart'
import { useFavorite } from '../composable/useFavorite'

const props = defineProps({
  product: {
    type: Object,
    require: true,
    default: () => ({}),
  },
  statusPos: {
    type: String,
    default: 'vl',
  },
  direction: {
    type: String,
    difault: 'vertical',
    validator: (val) => ['vertical', 'horizontal'].indexOf(val) !== -1,
  },
})

// store
const $store = useCartStore()
const addToCart = (id) => {
  $store.addToCart({ productId: id, qty: 1 })
}

// favorite
const { toggleFavorite, initFavorite, isFavorite } = useFavorite()

onMounted(() => {
  initFavorite(props.product.id)
})
</script>

<template>
  <div
    class="product-card"
    :class="{ 'product-card--horizontal': props.direction === 'horizontal' }"
    @click="$router.push({ name: 'shop-detail', params: { id: product.id } })"
  >
    <div class="product-card-header">
      <p
        v-if="product.statusType"
        :class="
          product.statusPos === 'vr'
            ? 'product-card-status product-card-status--vr bg-primary text-white'
            : 'product-card-status product-card-status--vl bg-warning'
        "
      >
        {{ product.statusType }}
      </p>
      <div class="product-card-image">
        <img :src="product.imageUrl" alt="product-card-img" />
      </div>
      <div class="product-card-action">
        <li class="me-2" @click.stop="toggleFavorite(product)">
          <SvgIcon name="favorite" width="24" height="24" />
        </li>
        <li @click.stop="addToCart(product.id)"><SvgIcon name="cart" width="24" height="24" /></li>
      </div>
    </div>
    <div class="product-card-body">
      <div class="product-card-content">
        <div :class="{ 'd-flex justify-content-between ': props.direction !== 'horizontal' }">
          <h6 class="text-secondary" :class="{ 'fs-5': props.direction === 'horizontal' }">
            {{ product.title }}
          </h6>
        </div>
        <div class="product-card-score mb-2">
          <ProductItemRate :rate="+product.rate || 0" />
        </div>
        <div class="d-flex align-items-center">
          <p class="fs-6 me-2">NT$ {{ product.price }}</p>
          <p class="text-gray-500 fs-7">
            <del>NT$ {{ product.origin_price }} </del>
          </p>
        </div>
        <p v-show="props.direction === 'horizontal'">{{ product.description }}</p>
      </div>
    </div>
    <div class="product-card-footer">
      <div class="d-flex flex-column justify-content-center h-100 ps-3">
        <button
          class="btn btn-primary text-white mb-2"
          type="button"
          @click.stop="addToCart(product.id)"
        >
          <SvgIcon name="cart" width="24" height="24" color="#feebeb" :need-hover="false" />
          <span class="d-none d-lg-inlie">加入購物車</span>
        </button>
        <button class="btn btn-outline-info" type="button" @click.stop="toggleFavorite(product)">
          <SvgIcon
            v-show="isFavorite"
            name="favorite-fill"
            width="24"
            height="24"
            :need-hover="false"
          />
          <SvgIcon
            v-show="!isFavorite"
            name="favorite"
            width="24"
            height="24"
            :need-hover="false"
          />
          <span class="d-none d-lg-inlie">加入最愛</span>
        </button>
      </div>
    </div>
  </div>
</template>
