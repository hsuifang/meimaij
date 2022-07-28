<script setup>
const cardStyle = ref('list')
</script>

<template>
  <div class="container py-5">
    <div class="row g-5">
      <!-- filter -->
      <div class="col-lg-3">
        <div class="input-group mb-4">
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
          <button type="button" class="btn">搜尋</button>
        </div>

        <ul>
          <li class="mb-4">
            <h5 class="mb-2">產品類型</h5>
            <ul class="ms-2">
              <li class="mb-2"><a href="#">全部 (1000)</a></li>
              <li class="mb-2"><a href="#">乾糧(22)</a></li>
              <li class="mb-2"><a href="#">零食(22)</a></li>
              <li class="mb-2"><a href="#">鮮食(22)</a></li>
              <li class="mb-2"><a href="#">生食餐(22)</a></li>
            </ul>
          </li>
          <li class="mb-4">
            <h5 class="mb-2">價位</h5>
            <div>
              <input type="range" class="form-range" min="0" max="1000" id="customRange2" />
              <p>price: $0 - $1,000</p>
            </div>
          </li>
          <li>
            <h5 class="mb-2">標籤</h5>
            <ul class="d-flex">
              <li class="me-1 px-2 border bg-white"><a href="#" class="">鮮食</a></li>
              <li class="me-1 px-2 border bg-white"><a href="#">熱門</a></li>
              <li class="me-1 px-2 border bg-white"><a href="#">特價</a></li>
              <li class="me-1 px-2 border bg-white"><a href="#">成犬</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="col-12 col-lg-9">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center me-3">
              <a href="#" class="p-2 bg-light me-1" @click.prevent="cardStyle = 'grid'"
                ><SvgIcon name="grid" width="24" height="24"
              /></a>
              <a href="#" class="p-2 bg-light" @click.prevent="cardStyle = 'list'"
                ><SvgIcon name="list" width="24" height="24"
              /></a>
            </div>
            <select class="form-select">
              <option value="0">Price: Low To High</option>
              <option value="1">Price:Low To High</option>
            </select>
          </div>
        </div>
        <ul class="row">
          <li
            :class="cardStyle === 'list' ? 'py-3  border-bottom col-12' : 'col-4'"
            v-for="i in 3"
            :key="i"
            @click="$router.push({ name: 'shop-detail', params: { id: 'test' } })"
          >
            <ProductCard statusPos="vr" :direction="cardStyle === 'list' ? 'horizontal' : 'grid'" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
