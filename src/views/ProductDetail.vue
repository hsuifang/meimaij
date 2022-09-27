<script setup>
import { apiGetSpecficProduct } from '@/api'
import { useProductStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useFavorite } from '../composable/useFavorite'

const $productStore = useProductStore()
const $cartStore = useCartStore()

const tabStatus = ref('discript')
// store
if (!$productStore.products.length) {
  $productStore.fetchValidProducts()
}
// route
const route = useRoute()

// product
const itemNumber = ref(1)
const productDetail = ref({})

const showProductDetail = async (id) => {
  try {
    // this.$vLoading(true);
    const res = await apiGetSpecficProduct(id)
    const { success, product } = res.data
    if (success) {
      productDetail.value = {
        ...product,
        imagesUrl: [product.imageUrl, ...product.imagesUrl],
        mainImage: product.imageUrl,
      }
    } else {
      // this.$vHttpsNotice(res, '查看產品');
    }
  } catch (error) {
    // this.$vErrorNotice()
  }
}
// favorite
const { toggleFavorite, initFavorite, isFavorite } = useFavorite()
const addToFavorite = (id) => {
  toggleFavorite(id)
}
onMounted(() => {
  initFavorite(productDetail.id)
})

//
showProductDetail(route.params.id)
</script>

<template>
  <section class="container py-5">
    <div class="mb-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#" @click.prevent="$router.push('/')">首頁</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $route.meta.title }}</li>
        </ol>
      </nav>
    </div>
    <div class="product-detail mb-3">
      <div class="product-detail-main mb-3 mb-lg-5">
        <div class="product-detail-cover">
          <div class="product-detail-image mb-2">
            <img alt="mainImage" :src="productDetail.mainImage" />
          </div>
          <ul class="product-detail-thumbnails">
            <li
              class="product-detail-thumbnail cursor-pointer"
              v-for="img in productDetail.imagesUrl"
              :key="img"
              @click="productDetail.mainImage = img"
            >
              <img :src="img" class="obj-fit-contain" alt="thumbnailImg" />
            </li>
          </ul>
        </div>
        <div class="product-detail-content">
          <div class="py-5 ps-lg-5 border-bottom">
            <h2 class="mb-1">{{ productDetail.title }}</h2>
            <div class="mb-3">
              <ProductItemRate :rate="+productDetail.rate || 0" />
            </div>
            <h3 class="text-primary mb-3 mb-lg-4">
              NT$ {{ productDetail.price }}
              <del class="fs-5 text-info">NT$ {{ productDetail.origin_price }}</del>
            </h3>
            <p class="text-info mb-4">
              {{ productDetail.content }}
            </p>
            <div class="d-lg-flex">
              <div class="d-flex align-items-center mb-3 mb-lg-0">
                <label for="input-quantity" class="me-2">數量</label
                ><input
                  type="number"
                  name="quantity"
                  min="1"
                  id="input-quantity"
                  class="form-control w-auto me-2"
                  v-model="itemNumber"
                />
              </div>
              <button
                type="button"
                class="btn btn-primary text-white me-2"
                @click="
                  $cartStore.addToCart({
                    productId: productDetail.id,
                    qty: itemNumber,
                  })
                "
              >
                加入購物車</button
              ><button
                type="button"
                class="btn btn-outline-info"
                @click.stop="addToFavorite(productDetail)"
              >
                <SvgIcon
                  v-show="isFavorite"
                  name="favorite-fill"
                  width="24"
                  height="24"
                  normal="#ea8484"
                />
                <SvgIcon v-show="!isFavorite" name="favorite" width="24" height="24" />
              </button>
            </div>
          </div>
          <ul class="ps-lg-5 py-4">
            <li class="py-1 text-gray-500 fs-7">編號:{{ productDetail.id }}</li>
            <li class="py-1 text-gray-500 fs-7">分類: {{ productDetail.category }}</li>
            <li class="py-1 text-gray-500 fs-7" v-if="productDetail.statusType">
              標籤: {{ productDetail.statusType }}
            </li>
          </ul>
        </div>
      </div>
      <div class="product-detail-sub">
        <nav>
          <ul class="d-flex mb-3 mb-lg-5 border-bottom">
            <li
              @click="tabStatus = 'discript'"
              class="h4 me-6 pb-3 fw-bold border-bottom border-4"
              :class="tabStatus === 'discript' ? 'border-primary' : 'border-transparent'"
            >
              <a href="#" class="text-info" @click.prevent>產品說明</a>
            </li>
            <li
              class="h4 pb-3 fw-bold border-bottom border-4"
              @click="tabStatus = 'comment'"
              :class="tabStatus === 'comment' ? 'border-primary' : 'border-transparent'"
            >
              <a href="#" class="text-info" @click.prevent>商品評價</a>
            </li>
          </ul>
        </nav>
        <div v-show="tabStatus === 'discript'">
          <p class="py-3 fw-bold">說明 ---</p>
          <p>{{ productDetail.description }}</p>
          <p class="py-3 fw-bold">內容 ---</p>
          <p>{{ productDetail.content }}</p>
          <p class="py-3 fw-bold">規格 ---</p>
          <p>
            {{ productDetail.spec }}
          </p>
        </div>
        <ul v-show="tabStatus === 'comment'">
          <li class="py-4 d-flex border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              class="rounded-circle"
              style="width: 80px"
              alt="Avatar"
            />
            <div class="ms-3">
              <div class="d-flex align-items-center mb-2">
                <p class="fw-bold">台中陳小姐</p>
                <div class="px-2">
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                </div>
              </div>
              <p class="mb-1">過往沒有使用過該產品，想說試試看，沒想到我家的臭寶貝超喜歡！</p>
              <p class="text-info">2021/03/06</p>
            </div>
          </li>
          <li class="py-4 d-flex border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              class="rounded-circle"
              style="width: 80px"
              alt="Avatar"
            />
            <div class="ms-3">
              <div class="d-flex align-items-center mb-2">
                <p class="fw-bold">台中王小姐</p>
                <div class="px-2">
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                  <SvgIcon name="star" width="16" height="16" normal="orange" />
                </div>
              </div>
              <p class="mb-1">推薦給想購買的了，我家寶貝是見證者 :)</p>
              <p class="text-info">2021/05/06</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="py-5 py-lg-8 bg-light">
    <div class="container">
      <h2 class="border-start border-primary border-4 mb-3 mb-lg-4 ps-3">你可能有興趣</h2>
      <swiper
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :breakpoints="{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }"
      >
        <swiper-slide v-for="product in $productStore.randomProductsByNum(9)" :key="product"
          ><ProductCard :product="product"
        /></swiper-slide>
      </swiper>
    </div>
  </section>
</template>
