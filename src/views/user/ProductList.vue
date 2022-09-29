<script setup>
import { useProductStore } from '@/stores/products'

// store
const cardStyle = ref('list')

const $store = useProductStore()
if (!$store.products.length) {
  $store.fetchValidProducts()
}

// Filter:
const inputName = ref('')
const searchName = ref('')
const categorySelected = ref('全部')
const productList = computed(() => {
  return $store.filterProductByRule({
    searchName: searchName.value,
    category: categorySelected.value,
  })
})
const setSearchName = (val) => {
  searchName.value = val
}
</script>

<template>
  <div class="container py-5">
    <div class="row g-5">
      <!-- filter -->
      <div class="d-none d-lg-block col-lg-3">
        <div class="input-group mb-4">
          <input
            v-model="inputName"
            aria-label="搜尋名稱"
            type="text"
            class="form-control"
            placeholder="查詢產品名稱"
            @keyup.enter="setSearchName(inputName)"
          />
          <button type="button" class="btn border bg-light" @click="setSearchName(inputName)">
            搜尋
          </button>
        </div>
        <ul>
          <li class="mb-4">
            <h5 class="mb-2">產品類型</h5>
            <ul class="ms-2">
              <li class="mb-2" v-for="category in $store.categoriesInfo" :key="category.id">
                <a
                  href="#"
                  class="border-2 pb-1"
                  :class="
                    categorySelected === category.name
                      ? 'border-bottom border-primary'
                      : 'border-transparent'
                  "
                  @click.prevent="categorySelected = category.name"
                  >{{ category.name }} ( {{ category.count }} )</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="col-12 col-lg-9">
        <div class="d-flex justify-content-between align-items-center mb-3 px-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" @click="$router.push('/')">首頁</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ $route.meta.title }}</li>
            </ol>
          </nav>
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center me-3">
              <a href="#" class="p-2 bg-light me-1" @click.prevent="cardStyle = 'grid'"
                ><SvgIcon name="grid" width="24" height="24"
              /></a>
              <a href="#" class="p-2 bg-light" @click.prevent="cardStyle = 'list'"
                ><SvgIcon name="list" width="24" height="24"
              /></a>
            </div>
            <!-- TODO -->
            <!-- <select class="form-select">
              <option value="0">價格: 低到高</option>
              <option value="1">價格: 高到低</option>
            </select> -->
          </div>
        </div>
        <ul class="row">
          <li
            :class="cardStyle === 'list' ? 'py-3  border-bottom col-12' : 'col-6 col-lg-4'"
            v-for="product in productList"
            :key="product.id"
            @click="$router.push({ name: 'shop-detail', params: { id: product.id } })"
          >
            <ProductCard
              statusPos="vr"
              :product="product"
              :direction="cardStyle === 'list' ? 'horizontal' : 'vertical'"
            />
          </li>
        </ul>
        <p class="text-center" v-if="productList.length === 0">
          查無結果 / <a href="#" @click.prevent="$store.setSearchName('')"> 查看全部商品 </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
