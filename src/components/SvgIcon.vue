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
  color: {
    type: String,
    default: '#333',
  },
  className: {
    type: String,
  },
})
const svgName = computed(() => `#/${props.prefix}-${props.name}`)
const svgClass = computed(() => (props.className ? 'svg-icon ' + props.className : 'svg-icon'))
</script>

<template>
  <svg :class="svgClass">
    <use :xlink:href="svgName" :fill="color" />
  </svg>
</template>

<style lang="scss">
.svg-icon {
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  fill: currentColor;
  overflow: hidden;
}
</style>
