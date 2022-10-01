<template>
  <div class="mb-md-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" @click.prevent="$router.push('/')">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ $route.meta.title || '無' }}</li>
      </ol>
    </nav>
  </div>
</template>
