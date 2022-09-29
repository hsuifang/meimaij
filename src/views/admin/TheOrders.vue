<script setup>
import { apiGetOrders } from '@/api'
import useLoading from '../../composable/useLoading'

// loading
const { toggleLoading } = useLoading()

// product list
const columns = [
  { name: 'create_at', label: '購買時間' },
  { name: 'name', label: '姓名' },
  { name: 'product', label: '購買款項' },
  { name: 'total', label: '付款金額' },
  { name: 'is_paid', label: '是否付款' },
  { name: 'action', label: '功能' },
]
const orders = reactive({ data: [] })
const pageInfo = ref({
  currentPage: 1,
  totalPages: 1,
})

const fetchOrders = async (page = 1) => {
  try {
    toggleLoading(true)
    const res = await apiGetOrders(page)
    const { orders: resOrders, pagination, success } = res.data
    if (success) {
      orders.data = resOrders
      pageInfo.value = {
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
      }
    }
  } catch (error) {
    this.$vErrorNotice()
  } finally {
    toggleLoading(false)
  }
}

fetchOrders()
</script>

<template>
  <div class="container pt-4 pb-4 pt-lg-7 pb-lg-7">
    <div class="card">
      <div class="card-body">
        <AppTable
          :columns="columns"
          :values="orders.data"
          :pages="pageInfo"
          @changePage="(page) => fetchOrders(page)"
        >
          <template #header>
            <div class="d-flex justify-content-md-between pr-3 mb-4">
              <h2 class="h6 text-info">訂單清單</h2>
              <div class="text-end mb-2" v-if="orders.length > 0">
                <button type="button" class="btn btn-outline-secondary py-2 px-3">刪除全部</button>
              </div>
            </div>
          </template>
          <template #name="{ data }">
            <p>
              {{ data.user.name }}
            </p>
          </template>
          <template #product="{ data }">
            <ul class="list-unstyled">
              <li v-for="(product, prodcutKey) in data.products" :key="prodcutKey">
                {{ product.product.title }}
                <span class="text-secondary"
                  >數量：{{ product.qty }} {{ product.product.unit }}</span
                >
              </li>
            </ul>
          </template>

          <template #is_paid="{ data }">
            <p>
              {{ data.is_paid ? '已付款' : '未付款' }}
            </p>
          </template>

          <template #action>
            <button type="button" class="btn btn-sm btn-outline-info me-1" data-action="remove">
              編輯
            </button>
            <button type="button" class="btn btn-sm btn-danger text-white" data-action="remove">
              刪除
            </button>
          </template>

          <template #caption>
            <p>
              目前有 <span>{{ orders.length }}</span> 項訂單
            </p>
          </template>
        </AppTable>
      </div>
    </div>
  </div>
</template>
