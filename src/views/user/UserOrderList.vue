<script setup>
import { apiUserQueryOrders } from '@/api'
import * as $filters from '@/common/filters'
import useLoading from '@/composable/useLoading'
// loading
const { toggleLoading } = useLoading()

// orders
const columns = [
  { name: 'title', label: '名稱', className: 'col-3' },
  { name: 'qty', label: '數量' },
  { name: 'order_time', label: '訂購日期' },
  { name: 'is_paid', label: '付款' },
  { name: 'action', label: '明細' },
]
const list = reactive({ data: [] })
const pageInfo = ref({
  currentPage: 1,
  totalPages: 1,
})

const queryOrderList = async (page = 1) => {
  toggleLoading(true)
  try {
    const res = await apiUserQueryOrders(page)
    const { success, orders, pagination } = res.data
    if (success) {
      list.data = orders
      pageInfo.value = {
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
      }
    }
  } catch (error) {
    addNotifications({ message: error.response?.message || '系統發生異常', type: 'danger' })
  }
  toggleLoading(false)
}

queryOrderList()
</script>

<template>
  <div>
    <!-- <nav class="nav border-bottom border-3 mb-3">
          <a class="nav-link active fs-5 text-gray-500" aria-current="page" href="#"
            >尚未付款<span>0</span></a
          >
          <a class="nav-link fs-5 text-gray-500" href="#">處理中<span>0</span></a>
          <a class="nav-link fs-5 text-gray-500" href="#">待收貨<span>0</span></a>
          <a class="nav-link fs-5 text-gray-500" href="#">已完成<span>0</span></a>
          <a class="nav-link fs-5 text-gray-500" href="#">已取消<span>0</span></a>
        </nav> -->
    <AppTable :columns="columns" :values="list.data" :pages="pageInfo">
      <template #title="{ data }">
        <div>
          <p class="fs-7 text-dark" v-for="order in data.products" :key="order.id">
            {{ order.product.title }}
          </p>
          <p class="fs-8 text-secondary mt-1">{{ $filters.currency(data.total) }}</p>
        </div>
      </template>
      <template #qty="{ data }">
        <p class="px-2">{{ Object.keys(data.products).length }}</p>
      </template>
      <template #order_time="{ data }">
        <p class="fs-7">{{ $filters.localeDateStr(data.create_at) }}</p>
      </template>
      <template #is_paid="{ data }">
        <div>
          <p
            :class="[data.is_paid ? 'bg-success' : 'bg-danger']"
            class="rounded text-white px-2 d-inline-block mb-1 fs-8"
          >
            {{ data.is_paid ? '已付款' : '未付款' }}
          </p>
          <p v-if="data.paid_date" class="fs-8">
            {{ $filters.localeDateStr(data.paid_date) }}
            {{ $filters.localeTimeStr(data.paid_date) }}
          </p>
        </div>
      </template>
      <template #action="{ data }">
        <button
          type="button"
          class="btn btn-outline-info btn-sm"
          @click="$router.push(`/order/${data.id}`)"
        >
          查看
        </button>
      </template>
    </AppTable>
  </div>
</template>
