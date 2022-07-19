<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: 'icon',
  },
  normal: {
    type: String,
    default: '#333',
  },
  hover: {
    type: String,
    default: '#ea8484',
  },
  className: {
    type: String,
  },
})
const color = ref('')
const svgName = computed(() => `#/${props.prefix}-${props.name}`)
const svgClass = computed(() => (props.className ? 'svg-icon ' + props.className : 'svg-icon'))

onMounted(() => {
  color.value = props.normal
})
</script>

<template>
  <svg :class="svgClass" @mouseenter="color = hover" @mouseleave="color = normal">
    <use :xlink:href="svgName" :fill="color" />
  </svg>
</template>

<style lang="scss">
.svg-icon {
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
}
</style>
