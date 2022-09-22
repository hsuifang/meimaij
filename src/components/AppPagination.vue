<script setup>
const props = defineProps({
  pages: Object,
})
</script>

<template>
  <nav class="text-center">
    <ul class="pagination d-flex justify-content-center my-4">
      <li
        class="page-item"
        :class="pages.totalPages === 1 && pages.currentPage !== 1 ? 'disabled' : ''"
      >
        <a class="page-link" href="#" @click.prevent="$emit('changePage', 1)">
          <span>最前</span>
        </a>
      </li>
      <li class="page-item" :class="pages.currentPage === 1 ? 'disabled' : ''">
        <a class="page-link" href="#" @click.prevent="$emit('changePage', pages.currentPage - 1)">
          <span>上頁</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="(item, key) in pages.totalPages"
        :key="key"
        :class="item === pages.currentPage ? 'active' : ''"
      >
        <a class="page-link" href="#" @click.prevent="$emit('changePage', item)"> {{ item }}</a>
      </li>

      <li class="page-item" :class="pages.currentPage === pages.totalPages ? 'disabled' : ''">
        <a class="page-link" href="#" @click.prevent="$emit('changePage', pages.currentPage + 1)">
          <span>下頁</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="pages.totalPages === 1 || pages.currentPage === pages.totalPages ? 'disabled' : ''"
      >
        <a class="page-link" href="#" @click.prevent="$emit('changePage', pages.totalPages)">
          <span>最後</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
