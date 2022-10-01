<script setup>
import { useCartStore } from '@/stores/cart'
import * as $filters from '@/common/filters'
import { apiGenerateOrder, apiApplyCoupon } from '@/api'

import useNotifications from '@/composable/useNotifications'
import useLoading from '@/composable/useLoading'

// loading
const { toggleLoading } = useLoading()

// notify
const { addNotifications } = useNotifications()

const $store = useCartStore()
const $router = useRouter()

const user = reactive({ name: '', email: '', tel: '', address: '' })
const userMessage = ref('')
const coupon = ref('')

const applyCoupon = async () => {
  if (!couponCode) return

  try {
    const res = await apiApplyCoupon(this.couponCode)
    if (res.data.success) {
      this.fetchCartList()
      addNotifications({ message, type: 'success' })
    }
    this.couponCode = ''
  } catch (error) {
    addNotifications({ message: error.response?.message, type: 'danger' })
  }
}

const handleSubmit = async () => {
  toggleLoading(true)
  try {
    const res = await apiGenerateOrder({
      user,
      message: userMessage,
    })
    const { success, orderId, message } = res.data
    if (success) {
      addNotifications({ message, type: 'success' })
      $router.push(`/order/${orderId}`)
    } else {
      addNotifications({ message, type: 'danger' })
    }
  } catch (error) {
    addNotifications({ message: error.response?.message, type: 'danger' })
  }
  toggleLoading(false)
}
</script>

<template>
  <div class="container py-5">
    <PageTitle />

    <VForm @submit="handleSubmit" ref="form" v-slot="{ errors }" class="py-md-3">
      <div class="row gx-lg-5">
        <div class="col-lg-6">
          <h3 class="h5 mb-3 mb-md-4 border-start border-4 border-primary ps-3 py-2">購買者資訊</h3>
          <div class="mb-3 mb-lg-4">
            <label for="name" class="form-label">姓名</label>
            <VField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="user.name"
            />
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>
          <div class="mb-3 mb-lg-4">
            <label for="email" class="form-label">Email</label>
            <VField
              id="email"
              name="Email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['Email'] }"
              placeholder="請輸入Email"
              rules="email|required"
              v-model="user.email"
            ></VField>
            <ErrorMessage name="Email" class="invalid-feedback" />
          </div>
          <div class="mb-3 mb-lg-4">
            <label for="tel" class="form-label">電話</label>
            <VField
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="min:8|max:10|required"
              v-model="user.tel"
            ></VField>
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>
          <div class="mb-3 mb-lg-4">
            <label for="address" class="form-label">地址</label>
            <VField
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="user.address"
            ></VField>
            <ErrorMessage name="地址" class="invalid-feedback" />
          </div>
          <div class="mb-3 mb-lg-4">
            <label for="message" class="form-label">留言或備註</label>
            <textarea
              id="message"
              cols="30"
              rows="2"
              class="form-control"
              v-model="userMessage"
            ></textarea>
          </div>
          <div class="text-end d-lg-none">
            <button type="submit" class="btn btn-primary px-4 text-white">購買確認</button>
          </div>
        </div>

        <div class="col-lg-6">
          <h3 class="h5 mb-md-4 border-start border-4 border-primary ps-3 py-2">購買項目</h3>
          <ul class="bg-gray-100 list-group list-group-flush p-2 p-lg-5 mb-3 mb-lg-4">
            <li class="list-group-item d-flex justify-content-md-between">
              <p class="fw-bold">名稱 <span class="d-md-none">/</span></p>
              <p class="fw-bold">金額</p>
            </li>
            <li class="list-group-item" v-for="cart in $store.carts" :key="cart.id">
              <div class="d-md-flex justify-content-between">
                <p>{{ cart.product.title }} x {{ cart.qty }}</p>
                <p>{{ $filters.currency(cart.product.price) }}</p>
              </div>
            </li>

            <li class="list-group-item d-flex justify-content-between">
              <p class="fw-bold">小計</p>
              <p class="fw-bold">{{ $filters.currency($store.price.total) }}</p>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <p class="fw-bold">折扣</p>
              <p class="fw-bold">
                {{ $filters.currency($store.price.total - $store.price.final) }}
              </p>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <p class="fw-bold">總計</p>
              <p class="fw-bold">{{ $filters.currency($store.price.final) }}</p>
            </li>
            <li class="list-group-item d-flex justify-content-end">
              <input
                id="coupon"
                type="text"
                class="form-control me-2"
                style="width: 200px"
                v-model="coupon"
              /><button type="button" class="btn btn-secondary text-white" @click="applyCoupon">
                優惠券
              </button>
            </li>
          </ul>
          <div class="text-end d-none d-lg-block">
            <button type="submit" class="btn btn-primary px-4 text-white">購買確認</button>
          </div>
        </div>
      </div>
    </VForm>
  </div>
</template>
