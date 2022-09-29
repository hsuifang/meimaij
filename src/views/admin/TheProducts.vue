<script setup>
import {
  apiGetAdminProducts,
  apiDeleteProductItem,
  apiCreateProduct,
  apiUpdateProduct,
} from '@/api'

import useLoading from '../../composable/useLoading'
import useNotifications from '../../composable/useNotifications'

// loading
const { toggleLoading } = useLoading()

// notify
const { addNotifications } = useNotifications()

// product list
const columns = [
  { name: 'title', label: '產品名稱' },
  { name: 'category', label: '類別' },
  { name: 'rate', label: '評價' },
  { name: 'origin_price', label: '原價' },
  { name: 'price', label: '原價' },
  { name: 'is_enabled', label: '是否啟用' },
  { name: 'trigger_btn', label: '' },
]
const products = reactive({ data: [] })
const pageInfo = ref({
  currentPage: 1,
  totalPages: 1,
})

const fetchProductData = async (page = 1) => {
  toggleLoading(true)
  try {
    const res = await apiGetAdminProducts(page)
    const { pagination, success } = res.data
    const resProducts = res.data.products
    if (success) {
      products.data = resProducts.map((item) => ({
        ...item,
        is_enabled: Boolean(item.is_enabled),
      }))
      pageInfo.value = {
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
      }
    } else {
      //
    }
  } catch (error) {
    //
  }
  toggleLoading(false)
}

// handle action of product
const showModal = ref(false)
const currentProductItem = reactive({ data: {} })

const generateItemForm = () => {
  return {
    title: '',
    category: '',
    origin_price: null,
    price: null,
    unit: '',
    description: '',
    content: '',
    is_enabled: true,
    imageUrl: '',
    rate: 5,
    imagesUrl: ['', '', '', '', ''],
  }
}
const toggleProductItemStatus = async (item) => {
  try {
    currentProductItem.data = item
    currentProductItem.data.is_enabled = !currentProductItem.data.is_enabled
    await submitProductItem({ isNew: false, content: currentProductItem.data })
  } catch (error) {}
}
const deleteProductItem = async ({ id }) => {
  confirm('確認刪除')
  toggleLoading(true)
  try {
    const res = await apiDeleteProductItem(id)
    if (res.data.success) {
      fetchProductData()
    }
  } catch (error) {
    addNotifications({ message: error.response.message || '系統發生異常', type: 'danger' })
  }
  toggleLoading(false)
}
const submitProductItem = async ({ isNew, content }) => {
  try {
    toggleLoading(true)
    const productId = content.id
    const res = isNew
      ? await apiCreateProduct({ data: content })
      : await apiUpdateProduct({ id: productId, data: { data: content } })
    const { success } = res.data
    if (success) {
      if (productId) {
        const idx = products.findIndex((item) => item.id === productId)
        if (idx !== -1) {
          products[idx] = content
        }
      } else {
        fetchProductData()
      }
    }
    $vHttpsNotice(res, '產品調整')
  } catch (error) {
    $vErrorNotice()
  } finally {
    toggleLoading(false)
  }
}

// 新增 / 修改
const handleProductItem = (item) => {
  currentProductItem.data = item
  showModal.value = true
}
const updateProductItem = () => {
  showModal.value = false
  initGenerateForm()
  fetchProductData()
}
const initGenerateForm = () => {
  currentProductItem.data = generateItemForm()
}

//
initGenerateForm()
fetchProductData()
</script>

<template>
  <div class="container pt-4 pb-4 pt-lg-7 pb-lg-7">
    <div class="card">
      <div class="card-body">
        <AppTable
          :columns="columns"
          :values="products.data"
          :pages="pageInfo"
          @changePage="(page) => fetchProductData(page)"
        >
          <template #header>
            <div class="d-flex justify-content-md-between pr-3 mb-4">
              <h2 class="h6 text-info">產品清單</h2>
              <button
                class="btn btn-outline-primary shadow-sm py-2"
                type="button"
                aria-controls="modifyProductItem"
                @click="handleProductItem({})"
              >
                建立新的產品
              </button>
            </div>
          </template>

          <template #is_enabled="props">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :checked="props.data.is_enabled"
                @change="toggleProductItemStatus(props.data.is_enabled)"
              />
            </div>
          </template>
          <template #trigger_btn="props">
            <div>
              <button
                type="button"
                class="btn btn-sm btn-outline-info me-1"
                data-action="remove"
                @click="handleProductItem(props.data)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-sm btn-danger text-white"
                data-action="remove"
                @click="deleteProductItem({ id: props.data.id, title: props.data.title })"
              >
                刪除
              </button>
            </div>
          </template>

          <template #caption>
            <p>
              目前有 <span>{{ products.data.length }}</span> 項產品
            </p>
          </template>
        </AppTable>
      </div>
    </div>
    <AppModal v-model="showModal" refName="productModal" title="產品">
      <ProductItemForm
        :isCreate="Boolean(currentProductItem.data.id)"
        :productItem="currentProductItem.data"
        @submitProductItem="updateProductItem"
        @clearItem="initGenerateForm"
      />
    </AppModal>

    <!--  -->
    <!-- <QuestionModal
      ref="questionModal"
      :content="questionModalContent"
      @checkInfo="deleteProductItem(targetItemId)"
    /> -->
  </div>
</template>
