<script setup>
import { bsAppModal } from '@/common/vendor'
let modal = reactive({ info: {} })
const props = defineProps({
  modelValue: Boolean,
  title: String,
  refName: String,
  size: {
    type: String,
    validator: (val) => ['sm', 'md', 'lg', 'xl'].indexOf(val) !== -1,
    default: 'lg',
  },
})
const modalName = ref(null)
const emit = defineEmits(['update:modelValue'])

const showModal = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const switchModal = (val) => {
  if (val) {
    modal.info.show()
  } else {
    modal.info.hide()
  }
}

watch(
  () => props.modelValue,
  (val) => {
    switchModal(val)
  }
)

onMounted(() => {
  modal.info = bsAppModal(modalName.value)
})

onUnmounted(() => {
  modal.info = {}
})
</script>
<template>
  <div
    :id="refName"
    class="modal fade show"
    ref="modalName"
    data-bs-backdrop="static"
    data-bs-focus="false"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered" :class="`modal-${size}`">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary p-3 text-white">
          <p>{{ title }}</p>
          <button
            type="button"
            class="btn-close text-white me-1"
            @click="showModal = false"
          ></button>
        </div>
        <div class="modal-body p-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
