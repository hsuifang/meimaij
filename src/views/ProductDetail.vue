<script setup>
const status = ref('discript')
</script>

<template>
  <section class="container py-5">
    <div class="mb-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
    </div>
    <div class="product-detail mb-3">
      <div class="product-detail-main mb-3 mb-lg-5">
        <div class="product-detail-cover">
          <div class="product-detail-image mb-2">
            <img
              alt="mainImage"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1625978530865.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EFPGqJvSEcM1Ji28bYAUpUHWw1o7WhhJ4WsBroB83r7oWwbsruXqg1oPMJbFjpcQRWFKIwQEnPxUx%2FKKLjcrX9y8Nvmgsg3Hu%2BRQfy24oxI78UwWbnj6O6%2BMsgWhp%2FA5HowvyDRT6j4YzQgutaXOyuvcdX4ha3UpqjlP7wEKCb3AtymR8CFKUOsFUWxeJZ3FXZd8tFR7zNiqfcz81PZyto1bVpUm9z0YkUBQYhO57iOOgtljeCSMnBZ5OOaIS%2Fk%2BhsxUxjdYS8MVPpWUHjkJBPR0QaHw6woxef7inL19PFuQlithbV6voHVUw4LXz%2B%2B3yokU4IECsSOqhkae7w%2FP6g%3D%3D"
            />
          </div>
          <ul class="product-detail-thumbnails">
            <li class="product-detail-thumbnail">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1625978530865.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EFPGqJvSEcM1Ji28bYAUpUHWw1o7WhhJ4WsBroB83r7oWwbsruXqg1oPMJbFjpcQRWFKIwQEnPxUx%2FKKLjcrX9y8Nvmgsg3Hu%2BRQfy24oxI78UwWbnj6O6%2BMsgWhp%2FA5HowvyDRT6j4YzQgutaXOyuvcdX4ha3UpqjlP7wEKCb3AtymR8CFKUOsFUWxeJZ3FXZd8tFR7zNiqfcz81PZyto1bVpUm9z0YkUBQYhO57iOOgtljeCSMnBZ5OOaIS%2Fk%2BhsxUxjdYS8MVPpWUHjkJBPR0QaHw6woxef7inL19PFuQlithbV6voHVUw4LXz%2B%2B3yokU4IECsSOqhkae7w%2FP6g%3D%3D"
                class="obj-fit-contain"
                alt="thumbnailImg"
              />
            </li>
            <li class="product-detail-thumbnail">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1625978530865.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EFPGqJvSEcM1Ji28bYAUpUHWw1o7WhhJ4WsBroB83r7oWwbsruXqg1oPMJbFjpcQRWFKIwQEnPxUx%2FKKLjcrX9y8Nvmgsg3Hu%2BRQfy24oxI78UwWbnj6O6%2BMsgWhp%2FA5HowvyDRT6j4YzQgutaXOyuvcdX4ha3UpqjlP7wEKCb3AtymR8CFKUOsFUWxeJZ3FXZd8tFR7zNiqfcz81PZyto1bVpUm9z0YkUBQYhO57iOOgtljeCSMnBZ5OOaIS%2Fk%2BhsxUxjdYS8MVPpWUHjkJBPR0QaHw6woxef7inL19PFuQlithbV6voHVUw4LXz%2B%2B3yokU4IECsSOqhkae7w%2FP6g%3D%3D"
                class="obj-fit-contain"
                alt="thumbnailImg"
              />
            </li>
          </ul>
        </div>
        <div class="product-detail-content">
          <div class="py-5 ps-lg-5 border-bottom">
            <h2 class="mb-1">牛雞生肉餐</h2>
            <div class="mb-3">
              <SvgIcon name="star" width="20" height="20" normal="orange" />
              <SvgIcon name="star" width="20" height="20" normal="orange" />
              <SvgIcon name="star" width="20" height="20" normal="orange" />
              <SvgIcon name="star" width="20" height="20" normal="orange" />
              <SvgIcon name="star" width="20" height="20" normal="orange" />
            </div>
            <h3 class="text-primary mb-3 mb-lg-4">
              NT$ 5,500 <del class="fs-5 text-info">NT$ 6,300</del>
            </h3>
            <p class="text-info mb-2">
              毛小孩的健康 / 從天然食物開始 小包裝9盒原價6300，特價5500。
            </p>
            <p class="text-info mb-4">餵食份量/ 成犬: 體重的2%~3% 未滿一歲: 體重的5%~7%</p>
            <div class="d-lg-flex">
              <div class="d-flex align-items-center mb-3 mb-lg-0">
                <label for="input-quantity" class="me-2">數量</label
                ><input
                  type="number"
                  name="quantity"
                  min="1"
                  id="input-quantity"
                  class="form-control w-auto me-2"
                  value="1"
                />
              </div>
              <button type="button" class="btn btn-primary text-white me-2">加入購物車</button
              ><button type="button" class="btn btn-outline-info">
                <SvgIcon name="favorite" width="24" height="24" />
              </button>
            </div>
          </div>
          <ul class="ps-lg-5 py-4">
            <li class="py-1 text-gray-500 fs-7">編號:2U897423</li>
            <li class="py-1 text-gray-500 fs-7">分類: XXX</li>
            <li class="py-1 text-gray-500 fs-7">Tag: 1111, asdf</li>
          </ul>
        </div>
      </div>
      <div class="product-detail-sub">
        <nav>
          <ul class="d-flex mb-3 mb-lg-5 border-bottom">
            <li
              @click="status = 'discript'"
              class="h4 me-6 pb-3 fw-bold border-bottom border-4"
              :class="status === 'discript' ? 'border-primary' : 'border-transparent'"
            >
              <a href="#" class="text-info" @click.prevent>產品說明</a>
            </li>
            <li
              class="h4 pb-3 fw-bold border-bottom border-4"
              @click="status = 'comment'"
              :class="status === 'comment' ? 'border-primary' : 'border-transparent'"
            >
              <a href="#" class="text-info" @click.prevent>商品評價</a>
            </li>
          </ul>
        </nav>
        <div v-show="status === 'discript'">
          <p class="py-3 fw-bold">說明 ---</p>
          <p>毛小孩的健康 / 從天然食物開始 小包裝9盒原價6300，特價5500。</p>
          <p class="py-3 fw-bold">內容 ---</p>
          <p>餵食份量/ 成犬: 體重的2%~3% 未滿一歲: 體重的5%~7%</p>
          <p class="py-3 fw-bold">規格 ---</p>
          <p>
            **牛生肉餐** 適用階段/成犬 主成分/ 雞肉 成分/
            全雞（帶骨）、雞胸肉、雞腿肉、水、雞心、鴨肝、雞蛋黃、雞肝、魚油、牛磺酸、鹽、海帶粉、錳、維生素E、鋅、維生素B1
            餵食份量/ 成犬: 體重的2%~3% 未滿一歲: 體重的5%~7% 餵食方式/ 1. 提早6-8小時至冷藏解凍 2.
            微波加熱 保存方式/ 冷藏
          </p>
        </div>
        <ul v-show="status === 'comment'">
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
        <swiper-slide v-for="i in 9" :key="i"><ProductCard /></swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss"></style>
