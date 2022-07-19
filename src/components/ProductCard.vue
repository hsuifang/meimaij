<script setup>
// https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1625978530865.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EFPGqJvSEcM1Ji28bYAUpUHWw1o7WhhJ4WsBroB83r7oWwbsruXqg1oPMJbFjpcQRWFKIwQEnPxUx%2FKKLjcrX9y8Nvmgsg3Hu%2BRQfy24oxI78UwWbnj6O6%2BMsgWhp%2FA5HowvyDRT6j4YzQgutaXOyuvcdX4ha3UpqjlP7wEKCb3AtymR8CFKUOsFUWxeJZ3FXZd8tFR7zNiqfcz81PZyto1bVpUm9z0YkUBQYhO57iOOgtljeCSMnBZ5OOaIS%2Fk%2BhsxUxjdYS8MVPpWUHjkJBPR0QaHw6woxef7inL19PFuQlithbV6voHVUw4LXz%2B%2B3yokU4IECsSOqhkae7w%2FP6g%3D%3D
</script>

<template>
  <div class="product-card">
    <p class="product-card-status product-card-status--vr bg-primary text-white">熱銷</p>
    <p class="product-card-status product-card-status--vl bg-warning">新品</p>
    <div class="product-card-header">
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
    <div class="product-card-body">
      <div class="d-flex align-items-end justify-content-between mb-2">
        <h6 class="text-secondary fs-5">產品名稱</h6>
        <div>
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
          <SvgIcon name="star" width="16" height="16" normal="orange" />
        </div>
      </div>
      <p class="text-info fs-6">NT22</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
