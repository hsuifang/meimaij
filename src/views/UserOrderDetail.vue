<script setup>
import { apiUserGetOrder, apiUserPayment } from '@/api'
import * as $filters from '../common/filters'

const $router = useRouter()
const $route = useRoute()

const orderId = ref('')
const detail = reactive({ data: {} })

const getOrderInfo = async (orderId) => {
  // this.$vLoading(true)
  try {
    const res = await apiUserGetOrder(orderId)
    const { success, order } = res.data
    if (success) {
      detail.data = order
    } else {
      // this.$vHttpsNotice(res, '訂單')
    }
  } catch (error) {}
}

const payForOrder = async () => {
  // this.$vLoading(true)
  try {
    const res = await apiUserPayment(orderId.value)
    const { success } = res.data
    if (success) {
      // this.$vLoading(false)
      detail.total.is_paid = true
      // this.$swal({
      //   title: '付款完成',
      //   icon: 'success',
      //   button: '確認',
      // })
    } else {
      // this.$vHttpsNotice(res, '付款')
    }
  } catch (error) {}
}

const init = () => {
  orderId.value = $route.params.id
  if (orderId.value) {
    getOrderInfo(orderId.value)
  } else {
    $router.push('/member')
  }
}

init()
</script>

<template>
  <div class="container py-5">
    <nav aria-label="breadcrumb mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Order</li>
      </ol>
    </nav>
    <div class="container py-lg-4 mb-8 mb-lg-0">
      <div class="text-center mb-7">
        <div class="d-flex justify-content-center align-items-center mb-5">
          <div class="me-3 bg-success rounded-circle p-2">
            <SvgIcon name="done" width="30" height="30" normal="white" />
          </div>
          <div>
            <h5 class="mb-1">感謝您！您的訂單已建立完成</h5>
            <p class="text-info">訂單編號: {{ orderId }}</p>
          </div>
        </div>
        <ul class="row g-0 py-5 bg-light">
          <li class="col-4">
            <p class="text-gray-500">訂購日期</p>
            <h5>{{ detail.data.create_at }}</h5>
          </li>
          <li class="col-4">
            <p class="text-gray-500">總計</p>
            <h5>{{ $filters.currency(detail.data.total) }}</h5>
          </li>
          <li class="col-4">
            <p class="text-gray-500">付款狀態</p>
            <h5>{{ detail.data.is_paid ? '已付款' : '未付款' }}</h5>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-6">
            <h3 class="h6 mb-2 mb-md-3 fw-bold">訂單資訊</h3>
            <ul class="list-group-flush">
              <li class="d-flex mb-2">
                <p class="w-25 me-1 me-lg-0 text-info">訂購時間</p>
                <p class="w-75">
                  {{ $filters.localeDateStr(detail.data.create_at) }}
                  {{ $filters.localeTimeStr(detail.data.create_at) }}
                </p>
              </li>
              <li class="d-flex">
                <p class="w-25 me-1 me-lg-0 text-info">處理狀態</p>
                <p class="w-75">{{ detail.processStatus || '處理中' }}</p>
              </li>
            </ul>
          </div>
          <div class="mb-6">
            <h3 class="h6 mb-2 mb-md-3 fw-bold">聯絡資訊</h3>
            <ul class="list-group-flush">
              <li class="d-lg-flex mb-1 mb-md-2">
                <p class="w-25 me-3 me-lg-0 text-info">姓名</p>
                {{ detail.user }}
                <p class="w-75">{{ detail.data.user?.name }}</p>
              </li>
              <li class="d-lg-flex mb-2">
                <p class="w-25 me-3 me-lg-0 text-info">運送地址</p>
                <p class="w-75">{{ detail.data.user?.address }}</p>
              </li>
              <li class="d-lg-flex mb-2">
                <p class="w-25 me-3 me-lg-0 text-info">聯絡電話</p>
                <p class="w-75">{{ detail.data.user?.tel }}</p>
              </li>
              <li class="d-lg-flex">
                <p class="w-25 me-3 me-lg-0 text-info">聯絡信箱</p>
                <p class="w-75">{{ detail.data.user?.email }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-6">
            <h3 class="h6 mb-2 mb-md-3 fw-bold">購買項目</h3>
            <ul class="list-group list-group-flush">
              <li v-for="key in Object.keys(detail.products || [])" :key="key">
                <div class="d-md-flex justify-content-between mb-md-2">
                  <p>{{ detail.products[key].product.title }} x {{ detail.products[key].qty }}</p>
                  <p>{{ $filters.currency(detail.products[key].total) }}</p>
                </div>
              </li>
              <li class="d-flex justify-content-between">
                <p>總計</p>
                <p class="fw-bold">{{ $filters.currency(detail.data.total) }}</p>
              </li>
            </ul>
          </div>
          <div class="mb-2 mb-lg-4">
            <h3 class="h6 mb-2 mb-md-3 fw-bold">付款狀態</h3>
            <ul class="list-group-flush bg-light py-4">
              <li class="d-flex mb-2">
                <p class="me-2">付款方式/</p>
                <p>信用卡</p>
              </li>
              <li class="d-flex">
                <p class="me-2">付款狀態/</p>
                <p
                  :class="[detail.data.is_paid ? 'bg-success' : 'bg-danger']"
                  class="rounded text-white px-2"
                >
                  {{ detail.data.is_paid ? '已付款' : '未付款' }}
                </p>
              </li>
            </ul>
          </div>
          <div class="text-end">
            <button
              v-if="!detail.data.is_paid"
              type="button"
              class="btn btn-primary px-6 text-white"
              @click="payForOrder"
            >
              付款
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
