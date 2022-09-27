<script setup>
// fadeInDown
import { useProductStore } from '../stores/products'
const $store = useProductStore()

$store.fetchValidProducts()
</script>

<template>
  <!-- swiper -->
  <TheBanner />
  <!-- ad -->
  <section data-discript="ad" class="pt-5 pt-2 py-lg-4">
    <div class="container-fluid">
      <ul class="row justify-content-between">
        <li class="col-8 col-md-4 col-lg-3 mb-3" v-animate="{ name: 'fadeInDown' }">
          <div class="benefit">
            <div class="benefit-img">
              <SvgIcon name="chat" width="20" height="20" />
            </div>
            <div class="benefit-content">
              <h2 class="benefit-title">LINE 服務</h2>
              <p class="benefit-text">10:00 - 21:00 LINE專人線上諮詢</p>
            </div>
          </div>
        </li>
        <li class="col-8 col-md-4 col-lg-3 mb-3" v-animate="{ name: 'fadeInDown' }">
          <div class="benefit">
            <div class="benefit-img">
              <SvgIcon name="chat" width="20" height="20" />
            </div>
            <div class="benefit-content">
              <h2 class="benefit-title">滿額免運</h2>
              <p class="benefit-text">消費滿NT$ 1000免運</p>
            </div>
          </div>
        </li>
        <li class="col-8 col-md-4 col-lg-3" v-animate="{ name: 'fadeInDown' }">
          <div class="benefit">
            <div class="benefit-img">
              <SvgIcon name="chat" width="20" height="20" />
            </div>
            <div class="benefit-content">
              <h2 class="benefit-title">快速配送</h2>
              <p class="benefit-text">工作日12:00前訂單，當日出貨</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- collection -->
  <section class="container py-lg-4">
    <ul class="row collection g-3">
      <li class="col-md-4">
        <div class="collection-bg d-none d-lg-block"></div>
        <div class="collection-discript" v-animate="{ name: 'fadeInLeft' }">
          <div class="mb-3 py-3">
            <h2 class="font-sans-serif ls-2 text-info mb-2">2022</h2>
            <h3 class="ls-2 text-info">今夏新品及熱銷</h3>
          </div>
          <div>
            <p class="ls-2 font-sans-serif text-info mb-3">今夏熱銷的商品 - 潔牙骨 、雞肉餐盒...</p>
            <p class="ls-2 font-sans-serif text-info mb-3">
              每個毛小孩都值得被寵愛！ 快來找找今夏屬於你們的商品吧！
            </p>
          </div>
          <p>
            <a
              href="#"
              @click.prevent="$router.push({ name: 'shop-list' })"
              class="fs-3 text-hover d-inlinels-2"
              >探索</a
            >
          </p>
        </div>
      </li>
      <li class="d-none d-md-block col-md-4" v-animate="{ name: 'fadeInRight' }">
        <div class="py-md-5 collection-image">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1628178875634.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HnnSrmmC8A2InAdKJzuWE4ogBBJ08UOkuXa94Wb9i%2FbZPLPvJ19ZIYHh5cT0b66RpA8uFXa2l6IWbSXGNcCI%2FaUCSKHHYqB0hZtlagEJ5SuMEds67tiv2Ib4vQHc%2BYHf%2FhBoip6JwTXfCn%2BhGSsg3dYKiRsyfMuQJOsynNBnxKgobrqpslMkku9IhTWk4iYmZPqz%2Bb8duW6pH2ST8QE0p6Y0houYgOhDq4DyFKqKfIFcXhJRGv2w9K6K%2Bpy%2F6OLk3Qb8YPMpycCOzeJoSuNhjCVB17v2zbXVk4B9dTnOw8nklYOtT%2BcmavdhvqaGSROaAN%2F5OwrSCfpK%2FXoLfr15Sw%3D%3D"
            alt="collection-image"
          />
        </div>
      </li>
      <li class="d-none d-md-block col-md-4" v-animate="{ name: 'fadeInRight' }">
        <div class="py-md-5 collection-image">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1628178999582.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=q90hXyluSlw%2FkhhHW0I4mbej39wDF2wH9dOL6bt5YJ8Evm64cCpRkiWyJkYbJHMucCXJGkYcm4OC28dVAi1Ga6iJD5xAYbN77I8sO0uxqIk82kWIPiPdiygKUj%2BoPsfwBL%2BAy3fdKmzYhN7g0qWnxnBGiSuX0vOiBEcfaEdOKINNZZJ5rGQI6V78G58EupKKTQ4VXAqnNxIpASsoYE9TmBJzd93oFR%2FQJJyaY8Y5GCeBurakP2kT3m%2FDiJB%2BPl%2FKDOF4W3sVXgqqm2wg0N%2B19xDUO1AfSlnXnwY%2BmiJnlbMjTZ2ddaCxcXhZmDgY2DiGzgHb%2BjGzG62ttT1j9p7jPw%3D%3D"
            alt="collection-image"
          />
        </div>
      </li>
    </ul>
  </section>

  <!-- product -->
  <section class="py-5 py-lg-8">
    <div class="container">
      <h2 class="border-start border-primary border-4 mb-3 mb-lg-5 ps-3">商品</h2>
      <div class="row">
        <div
          class="col-6 col-md-3 mb-3"
          v-for="product in $store.randomProductsByNum(4)"
          :key="product"
          v-animate="{ name: 'fadeInDown', delay: `${product.length > 4 ? '1.2s' : '0.8s'}` }"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>

  <!-- collection -->
  <section class="bg-gray-100" style="z-index: -2">
    <div class="collection">
      <div class="collection-bg d-none d-lg-block"></div>
      <div class="container">
        <div class="row">
          <li class="col-md-4" v-animate="{ name: 'fadeInDown', delay: '.5s' }">
            <div class="collection-image">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1628178875634.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HnnSrmmC8A2InAdKJzuWE4ogBBJ08UOkuXa94Wb9i%2FbZPLPvJ19ZIYHh5cT0b66RpA8uFXa2l6IWbSXGNcCI%2FaUCSKHHYqB0hZtlagEJ5SuMEds67tiv2Ib4vQHc%2BYHf%2FhBoip6JwTXfCn%2BhGSsg3dYKiRsyfMuQJOsynNBnxKgobrqpslMkku9IhTWk4iYmZPqz%2Bb8duW6pH2ST8QE0p6Y0houYgOhDq4DyFKqKfIFcXhJRGv2w9K6K%2Bpy%2F6OLk3Qb8YPMpycCOzeJoSuNhjCVB17v2zbXVk4B9dTnOw8nklYOtT%2BcmavdhvqaGSROaAN%2F5OwrSCfpK%2FXoLfr15Sw%3D%3D"
                alt="collection-image"
              />
            </div>
            <h4 class="py-3 text-gray-600 ls-2">他們笑 | 我們笑</h4>
          </li>
          <li class="col-md-4" v-animate="{ name: 'fadeInDown', delay: '.8s' }">
            <div class="py-md-5 collection-image">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1628178875634.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HnnSrmmC8A2InAdKJzuWE4ogBBJ08UOkuXa94Wb9i%2FbZPLPvJ19ZIYHh5cT0b66RpA8uFXa2l6IWbSXGNcCI%2FaUCSKHHYqB0hZtlagEJ5SuMEds67tiv2Ib4vQHc%2BYHf%2FhBoip6JwTXfCn%2BhGSsg3dYKiRsyfMuQJOsynNBnxKgobrqpslMkku9IhTWk4iYmZPqz%2Bb8duW6pH2ST8QE0p6Y0houYgOhDq4DyFKqKfIFcXhJRGv2w9K6K%2Bpy%2F6OLk3Qb8YPMpycCOzeJoSuNhjCVB17v2zbXVk4B9dTnOw8nklYOtT%2BcmavdhvqaGSROaAN%2F5OwrSCfpK%2FXoLfr15Sw%3D%3D"
                alt="collection-image"
              />
            </div>
          </li>
          <li class="col-md-4" v-animate="{ name: 'fadeInDown', delay: '1.2s' }">
            <div class="py-md-5">
              <h3 class="text-end mb-3 text-secondary">最營養的食物</h3>
              <div class="collection-image">
                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1628178999582.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=q90hXyluSlw%2FkhhHW0I4mbej39wDF2wH9dOL6bt5YJ8Evm64cCpRkiWyJkYbJHMucCXJGkYcm4OC28dVAi1Ga6iJD5xAYbN77I8sO0uxqIk82kWIPiPdiygKUj%2BoPsfwBL%2BAy3fdKmzYhN7g0qWnxnBGiSuX0vOiBEcfaEdOKINNZZJ5rGQI6V78G58EupKKTQ4VXAqnNxIpASsoYE9TmBJzd93oFR%2FQJJyaY8Y5GCeBurakP2kT3m%2FDiJB%2BPl%2FKDOF4W3sVXgqqm2wg0N%2B19xDUO1AfSlnXnwY%2BmiJnlbMjTZ2ddaCxcXhZmDgY2DiGzgHb%2BjGzG62ttT1j9p7jPw%3D%3D"
                  alt="collection-image"
                />
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </section>

  <!-- 熱門 -->
  <!-- swiper -->
  <section class="py-5 py-lg-8">
    <div class="container">
      <h2 class="border-start border-primary border-4 mb-3 mb-lg-4 ps-3">熱門商品</h2>
      <swiper
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
        <swiper-slide v-for="product in $store.randomProductsByNum(8)" :key="product.id">
          <ProductCard :product="product"
        /></swiper-slide>
      </swiper>
    </div>
  </section>

  <!-- 大家都這麼說 -->
  <section class="bg-light">
    <div class="container py-4 py-lg-8">
      <h2 class="text-center mb-3 mb-lg-5">購買者心得</h2>
      <div class="row pt-3">
        <div class="col-lg-4 mb-5 mb-lg-0" v-for="i in 3" :key="i">
          <div class="pin shadow px-5 py-4 pb-3 bg-white">
            <div class="d-flex align-items-center">
              <div class="w-25">
                <img
                  src="@/assets/logo.svg"
                  alt="avator"
                  width="50"
                  height="50"
                  class="overflow-hidden"
                />
              </div>
              <div>
                <h6 class="mb-1 ls-1">飼養黃金獵犬陳先生</h6>
                <p class="text-info">我家挑食的小寶貝超級愛</p>
              </div>
            </div>
            <h4 class="fs-5 mt-3 ls-2 fw-bold text-secondary text-end">購買雞肉乾糧</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
