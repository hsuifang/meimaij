<script setup>
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  values: {
    type: Array,
    default: () => [],
  },
  pages: Object,
})
</script>
<template>
  <div>
    <slot name="header" />
    <ul class="row g-0 list-unstyled rounded p-2 text-nowrap border-bottom">
      <li v-for="col in columns" :key="col.name" class="col" :class="col.className">
        <p>
          {{ col.label }}
        </p>
      </li>
    </ul>
    <ul v-if="values.length > 0">
      <li class="row g-0 p-2 border-bottom align-items-center" v-for="val in values" :key="val">
        <div v-for="col in columns" :key="col.name" class="col" :class="col.className">
          <slot :name="col.name" :data="val">{{ val[col.name] }}</slot>
        </div>
      </li>
    </ul>
    <p v-else class="p-4">目前無資料</p>
    <div class="d-flex justify-content-between align-items-center">
      <slot name="caption" />
      <AppPagination
        v-if="pages.totalPages > 1"
        :pages="pages"
        @changePage="(page) => $emit('changePage', page)"
      />
    </div>
  </div>
</template>
