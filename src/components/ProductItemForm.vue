<script setup>
import { apiCreateProduct, apiUpdateProduct } from '@/api'
const props = defineProps({
  isCreate: {
    type: Boolean,
  },
  productItem: {
    type: Object,
  },
})

const emit = defineEmits(['clearItem', 'submitProductItem'])

let statuses = [
  {
    id: 1,
    type: 'danger',
    name: '熱門',
    value: '熱門',
  },
  {
    id: 2,
    type: 'warning',
    name: '新上市',
    value: '新上市',
  },
  {
    id: 3,
    type: 'info',
    name: '不顯示',
    value: '',
  },
]
const images = ref([])
let currentProductItem = ref({})

const submitProductItem = async () => {
  try {
    // this.$vLoading(true);
    const product = currentProductItem.value
    const res = !product.id
      ? await apiCreateProduct({ data: product })
      : await apiUpdateProduct({ id: product.id, data: { data: product } })
    const { success } = res.data
    if (success) {
      emit('submitProductItem')
    }
  } catch (error) {
    console.log(error)
    // this.$vErrorNotice();
  } finally {
    // this.$vLoading(false);
  }
}

// valid check
const isButtonValid = computed(() => {
  const requireItem = ['title', 'category', 'unit', 'origin_price', 'price']
  return requireItem.every((item) => currentProductItem.value[item])
})

watch(
  () => props.productItem,
  (val) => {
    console.log(val)
    currentProductItem.value = { ...val }
  }
)

onMounted(() => {
  currentProductItem.value = { ...props.productItem }
})
</script>

<template>
  <form @submit.prevent="submitProductItem">
    <div @keydown.enter.stop class="row g-4">
      <div class="col-md-7">
        <p>圖片更新區</p>
        <!-- <ProductItemImagesUpload /> -->
      </div>
      <div class="col-md-5">
        <div class="row align-items-end">
          <div class="mb-3">
            <label for="title" class="form-label">產品名稱</label>
            <input type="text" class="form-control" id="title" v-model="currentProductItem.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">狀態</label>
            <ul class="d-flex">
              <li class="me-3" v-for="status in statuses" :key="status.id">
                <input
                  type="radio"
                  name="checkedStatus"
                  class="me-1 position-absolute opacity-0"
                  :value="status.value"
                  :id="`${status.type}Status`"
                  v-model="currentProductItem.statusType"
                />
                <label :for="`${status.type}Status`" class="checkedStatus--checked">
                  <span
                    style="width: 10px; height: 10px"
                    class="d-inline-block rounded-circle me-1"
                    :class="`bg-${status.type}`"
                  ></span>
                  {{ status.name }}
                </label>
              </li>
            </ul>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">描述</label>
            <textarea
              class="form-control"
              id="description"
              placeholder="描述"
              row="5"
              v-model="currentProductItem.description"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">內容</label>
            <textarea
              class="form-control"
              id="content"
              placeholder="內容"
              row="5"
              v-model="currentProductItem.content"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="spec" class="form-label">規格</label>
            <textarea
              class="form-control"
              id="spec"
              placeholder="規格"
              row="10"
              v-model="currentProductItem.spec"
            ></textarea>
          </div>
          <div class="col-md-6 mb-3">
            <label for="originPrice" class="form-label">原價</label>
            <input
              type="number"
              min="0"
              class="form-control"
              id="originPrice"
              v-model.number="currentProductItem.origin_price"
            />
          </div>
          <div class="col-md-6 mb-3">
            <label for="price" class="form-label">售價</label>
            <input
              type="number"
              min="0"
              class="form-control"
              id="price"
              v-model.number="currentProductItem.price"
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="category" class="form-label">類別</label>
            <input
              type="text"
              class="form-control"
              id="category"
              v-model="currentProductItem.category"
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="unit" class="form-label">單位</label>
            <input type="text" class="form-control" id="unit" v-model="currentProductItem.unit" />
          </div>
          <div class="col-md-4 mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="isEnabled"
                v-model="currentProductItem.is_enabled"
              />
              <label class="form-check-label" for="isEnabled"> 啟用 </label>
            </div>
          </div>
          <div class="col-md-8 mb-3">
            <label for="rate" class="form-label">評價 - {{ currentProductItem.rate }}</label>
            <input
              type="range"
              class="form-range w-100"
              min="0"
              max="5"
              step="0.5"
              id="rate"
              v-model.number="currentProductItem.rate"
            />
          </div>
          <div class="col-md-4 mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="isRateEnabled"
                v-model="currentProductItem.is_rateEnabled"
              />
              <label class="form-check-label" for="isRateEnabled"> 顯示評價 </label>
            </div>
          </div>
          <div class="col-12">
            <button
              type="submit"
              class="btn btn-primary text-white w-100 rounded-pill"
              :disabled="!isButtonValid"
            >
              {{ currentProductItem.id ? '編輯' : '新增' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
.productImg {
  width: 100%;
  padding-bottom: 70%;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%; /* This if for the object-fit */
    height: 100%; /* This if for the object-fit */
    object-fit: contain; /* Equivalent of the background-size: cover; of a background-image */
    object-position: center;
  }
}

input[name='checkedStatus'] {
  & ~ label {
    border-bottom: 2px solid #fff;
  }
  &:checked ~ label {
    border-bottom: 2px solid #232323;
  }
}
</style>
