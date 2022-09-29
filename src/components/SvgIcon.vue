<script setup>
import { startCase, split, join } from 'lodash'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#b86868',
  },
  size: {
    type: String,
    default: '1rem',
  },
  needHover: {
    type: Boolean,
    default: true,
  },
  hoverType: {
    type: String,
    default: 'light',
    validator: (val) => ['light', 'dark'].indexOf(val) !== -1,
  },
})
const icons = [
  'cart',
  'chat',
  'done',
  'favorite',
  'favorite-fill',
  'github',
  'linkin',
  'portfolio',
  'star',
  'star-fill',
  'star-half',
  'twitter',
  'minus',
  'plus',
  'grid',
  'list',
  'trash',
  'transport',
  'money',
]
const iconExist = computed(() => icons.includes(props.name))

const svgName = computed(() => {
  const firstLetterUpperCase = startCase(props.name)
  const splitLetter = split(firstLetterUpperCase, ' ')
  return `Icon${join(splitLetter, '')}`
})

const DynamicSvg = defineAsyncComponent(() => import(`./icons/${svgName.value}.vue`))
</script>

<template>
  <svg
    v-if="iconExist"
    :aria-labelledby="name"
    :width="size"
    :height="size"
    class="svg-icon"
    :class="{ [hoverType]: needHover }"
    :fill="color"
  >
    <DynamicSvg :fill="color" width="100%" height="100%" :class="{ [hoverType]: needHover }" />
  </svg>
</template>

<style lang="scss">
.svg-icon {
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  fill: currentColor;
}
svg:hover {
  border-radius: 8px;
}
svg.light:hover {
  background: #feebeb;
}
svg.dark:hover {
  background: #b86868;
}
</style>
