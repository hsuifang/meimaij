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
    <div class="d-flex align-items-center me-3 justify-content-end">
      <a href="#" class="p-2 bg-light me-1" @click.prevent="cardStyle = 'grid'"
        ><SvgIcon name="grid" width="24" height="24"
      /></a>
      <a href="#" class="p-2 bg-light" @click.prevent="cardStyle = 'list'"
        ><SvgIcon name="list" width="24" height="24"
      /></a>
    </div>
    <ul class="row mb-6">
      <li
        :class="cardStyle === 'list' ? 'py-3  border-bottom col-12' : 'col-6 col-lg-4'"
        v-for="product in favoriteProducts.data"
        :key="product?.id"
        @click="$router.push({ name: 'shop-detail', params: { id: product.id } })"
      >
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
