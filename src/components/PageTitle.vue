<template>
  <!-- <section class="bg-light mb-4 mb-lg-5">
    <div class="container text-center py-3 py-lg-5">
      <nav aria-label="breadcrumb">
        <slot name="breadcrumb"></slot>
      </nav>
    </div>
  </section>

   -->
  <div class="mb-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" @click.prevent="$router.push('/')">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ $route.meta.title || '無' }}</li>
      </ol>
    </nav>
  </div>
</template>
