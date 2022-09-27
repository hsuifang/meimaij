<script setup>
import { bsAppOffcanvas } from '@/common/vendor'
const canvasRef = ref(null)
const offcanvas = reactive({ info: {} })
const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])

// offcanvas style
const toggle = (val) => {
  if (val) {
    offcanvas.info.show()
  } else {
    offcanvas.info.hide()
  }
}

watch(
  () => props.modelValue,
  (val) => {
    toggle(val)
  }
)

watch(
  () => offcanvas.info,
  (val) => {
    console.error(val)
  }
)

onMounted(() => {
  offcanvas.info = bsAppOffcanvas(canvasRef.value)
})

onUnmounted(() => {
  offcanvas.info = {}
})
</script>

<template>
  <div
    ref="canvasRef"
    class="offcanvas offcanvas-end"
    tabindex="-1"
    aria-labelledby="createItemLabel"
    data-bs-backdrop="false"
    data-bs-keyboard="false"
  >
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title" id="createItemLabel">購物車</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        @click="emit('update:modelValue', false)"
      ></button>
    </div>
    <div class="offcanvas-body pt-0 bg-white">
      <slot />
    </div>
  </div>
</template>

<style lang="scss"></style>
