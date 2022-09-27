<script setup>
const props = defineProps({
  rate: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 || val <= 5,
  },
})

const starsList = computed(() => {
  const rateLength = Math.ceil(+props.rate)
  if (props.rate) {
    const lastStyle = rateLength === props.rate ? 'star-fill' : 'star-half'
    const restStyle = 5 - rateLength ? new Array(5 - rateLength).fill('star') : []
    const fillStars = rateLength - 1 ? new Array(rateLength - 1).fill('star-fill') : []
    return fillStars.concat(lastStyle).concat(restStyle)
  }
  return []
})
</script>

<template>
  <div>
    <SvgIcon
      v-for="(star, idx) in starsList"
      :key="`${idx}${star}`"
      :name="star"
      width="20"
      height="20"
      class="me-1"
    />
  </div>
</template>

<style lang="scss"></style>
