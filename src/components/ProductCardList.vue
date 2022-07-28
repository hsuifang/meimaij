<script setup>
// https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1625978530865.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EFPGqJvSEcM1Ji28bYAUpUHWw1o7WhhJ4WsBroB83r7oWwbsruXqg1oPMJbFjpcQRWFKIwQEnPxUx%2FKKLjcrX9y8Nvmgsg3Hu%2BRQfy24oxI78UwWbnj6O6%2BMsgWhp%2FA5HowvyDRT6j4YzQgutaXOyuvcdX4ha3UpqjlP7wEKCb3AtymR8CFKUOsFUWxeJZ3FXZd8tFR7zNiqfcz81PZyto1bVpUm9z0YkUBQYhO57iOOgtljeCSMnBZ5OOaIS%2Fk%2BhsxUxjdYS8MVPpWUHjkJBPR0QaHw6woxef7inL19PFuQlithbV6voHVUw4LXz%2B%2B3yokU4IECsSOqhkae7w%2FP6g%3D%3D
</script>

<template>
  <div class="product-card row g-0">
    <div class="product-card-header col-3">
      <p class="product-card-status product-card-status--vl bg-warning">新品</p>
      <p class="product-card-status product-card-status--vr bg-primary text-white">熱銷</p>
      <div class="product-card-image">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1625978530865.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EFPGqJvSEcM1Ji28bYAUpUHWw1o7WhhJ4WsBroB83r7oWwbsruXqg1oPMJbFjpcQRWFKIwQEnPxUx%2FKKLjcrX9y8Nvmgsg3Hu%2BRQfy24oxI78UwWbnj6O6%2BMsgWhp%2FA5HowvyDRT6j4YzQgutaXOyuvcdX4ha3UpqjlP7wEKCb3AtymR8CFKUOsFUWxeJZ3FXZd8tFR7zNiqfcz81PZyto1bVpUm9z0YkUBQYhO57iOOgtljeCSMnBZ5OOaIS%2Fk%2BhsxUxjdYS8MVPpWUHjkJBPR0QaHw6woxef7inL19PFuQlithbV6voHVUw4LXz%2B%2B3yokU4IECsSOqhkae7w%2FP6g%3D%3D"
          alt="product-card-img"
        />
      </div>
      <div class="product-card-action">
        <li class="me-2"><SvgIcon name="favorite" width="24" height="24" /></li>
        <li><SvgIcon name="cart" width="24" height="24" /></li>
      </div>
    </div>
    <div class="product-card-body col-6 bg-white">
      <div class="d-flex flex-column justify-content-center h-100 ps-4">
        <h6 class="text-secondary fs-5">雞肉乾糧(小顆粒) 12Kg</h6>
        <div class="mb-2">
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
        </div>

        <div class="d-flex">
          <p class="mb-1 me-2"><del>NT$ 2,499 </del></p>
          <p class="text-info fs-6">NT22</p>
        </div>
        <p>有助於腸道健康 有助於營養補充 護膚毛髮保健</p>
      </div>
    </div>
    <div class="product-card-footer col-3">
      <div class="d-flex flex-column justify-content-center h-100 ps-3">
        <button class="btn btn-primary text-white mb-2" type="button">加入購物車</button
        ><button class="btn btn-outline-info" type="button">
          <SvgIcon name="favorite" width="24" height="24" />
          加入我的最愛
        </button>
      </div>
    </div>
  </div>
</template>
