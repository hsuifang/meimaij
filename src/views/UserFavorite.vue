<script setup>
const favoriteProducts = reactive({ data: [] })
const cardStyle = ref('list')
const getFavaorite = () => {
  const products = JSON.parse(localStorage.getItem('meimaijlove'))
  if (products) {
    favoriteProducts.data = products
  }
}

getFavaorite()
</script>

<template>
  <div v-if="favoriteProducts.data.length > 0">
    <ul class="d-flex px-3 py-2 mb-4 bg-light" data-discript="filterViewType">
      <li class="me-3">
        <a href="#" data-view="product-grid" @click.prevent="productView = 'grid'"
          ><i
            class="bi bi-grid fs-4 fw-bold"
            :class="{ 'text-primary': productView === 'grid' }"
          ></i
        ></a>
      </li>
      <li>
        <a href="#" data-view="product-list" @click.prevent="productView = 'list'"
          ><i
            class="bi bi-list fs-4 fw-bold"
            :class="{ 'text-primary': productView === 'list' }"
          ></i
        ></a>
      </li>
    </ul>
    <ul class="row mb-6">
      <li v-for="product in favoriteProducts.data" :key="product?.id">
        <ProductCard
          statusPos="vr"
          :product="product"
          :direction="cardStyle === 'list' ? 'horizontal' : 'grid'"
        />
      </li>
    </ul>
  </div>
  <div v-else class="text-center">
    <h4 class="text-info mb-4">目前沒有收藏產品</h4>
    <router-link :to="{ name: 'shop-list' }" type="button" class="btn btn-outline-primary px-5">
      逛逛鎂麥產品
    </router-link>
  </div>
</template>
