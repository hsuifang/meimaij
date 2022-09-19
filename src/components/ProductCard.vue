<script setup>
const props = defineProps({
  product: {
    type: Object,
    require: true,
    default: () => ({}),
  },
  // TODO status position
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
// https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1625978530865.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EFPGqJvSEcM1Ji28bYAUpUHWw1o7WhhJ4WsBroB83r7oWwbsruXqg1oPMJbFjpcQRWFKIwQEnPxUx%2FKKLjcrX9y8Nvmgsg3Hu%2BRQfy24oxI78UwWbnj6O6%2BMsgWhp%2FA5HowvyDRT6j4YzQgutaXOyuvcdX4ha3UpqjlP7wEKCb3AtymR8CFKUOsFUWxeJZ3FXZd8tFR7zNiqfcz81PZyto1bVpUm9z0YkUBQYhO57iOOgtljeCSMnBZ5OOaIS%2Fk%2BhsxUxjdYS8MVPpWUHjkJBPR0QaHw6woxef7inL19PFuQlithbV6voHVUw4LXz%2B%2B3yokU4IECsSOqhkae7w%2FP6g%3D%3D
// TODO: AddToCart & AddFavorite
const addToCart = (id) => {
  console.log('AddToCart', id)
}
const addToFavorite = (id) => {
  console.log('addToFavorite', id)
}
</script>

<template>
  <div
    class="product-card"
    :class="{ 'product-card--horizontal': props.direction === 'horizontal' }"
    @click="$router.push({ name: 'shop-detail', params: { id: product.id } })"
  >
    <div class="product-card-header">
      <p
        class="product-card-status product-card-status--vr bg-primary text-white"
        v-show="statusPos === 'vr'"
      >
        {{ product.label || '無' }}
      </p>
      <p class="product-card-status product-card-status--vl bg-warning" v-show="statusPos === 'vl'">
        {{ product.label || '無' }}
      </p>
      <div class="product-card-image">
        <img :src="product.imageUrl" alt="product-card-img" />
      </div>
      <div class="product-card-action">
        <li class="me-2" @click="addToFavorite(product.id)">
          <SvgIcon name="favorite" width="24" height="24" />
        </li>
        <li @click="addToCart(product.id)"><SvgIcon name="cart" width="24" height="24" /></li>
      </div>
    </div>
    <div class="product-card-body">
      <div class="product-card-content">
        <div
          class="mb-2"
          :class="{ 'd-flex justify-content-between ': props.direction !== 'horizontal' }"
        >
          <h6 class="text-secondary" :class="{ 'fs-5': props.direction === 'horizontal' }">
            {{ product.title }}
          </h6>
          <!-- TODO: rate -->
        </div>
        <div class="product-card-score">
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
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
          @click="addToCart(product.id)"
        >
          加入購物車</button
        ><button class="btn btn-outline-info" type="button" @click="addToFavorite(product.id)">
          <SvgIcon name="favorite" width="24" height="24" />
          加入最愛
        </button>
      </div>
    </div>
  </div>
</template>
