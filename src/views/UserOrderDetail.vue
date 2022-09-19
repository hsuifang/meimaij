<script setup></script>

<template>
  <div class="container py-5">
    <nav aria-label="breadcrumb mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Order</li>
      </ol>
    </nav>
    <div class="container py-lg-4 mb-8 mb-lg-0">
      <div class="text-center mb-7">
        <div class="d-flex justify-content-center align-items-center mb-5">
          <div class="me-3 bg-success rounded-circle p-2">
            <SvgIcon name="done" width="30" height="30" normal="white" />
          </div>
          <div>
            <h5 class="mb-1">感謝您！您的訂單已建立完成</h5>
            <p class="text-info">訂單編號: -N8SYtiXtsIaIezv6pjb</p>
          </div>
        </div>
        <ul class="row g-0 py-5 bg-light">
          <li class="col-6 col-lg-3">
            <p class="text-gray-500">訂單編號</p>
            <h5>-N8SYtiXtsIaIezv6pjb</h5>
          </li>
          <li class="col-6 col-lg-3">
            <p class="text-gray-500">訂購日期</p>
            <h5>2022/8/2</h5>
          </li>
          <li class="col-6 col-lg-3">
            <p class="text-gray-500">總計</p>
            <h5>NT 5,500</h5>
          </li>
          <li class="col-6 col-lg-3">
            <p class="text-gray-500">付款狀態</p>
            <h5>已付款</h5>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-6">
            <h3 class="h6 mb-2 mb-md-3 fw-bold">訂單資訊</h3>
            <ul class="list-group-flush">
              <li class="d-flex mb-2">
                <p class="w-25 me-1 me-lg-0 text-info">訂購時間</p>
                <p class="w-75">2022/8/2 下午3:57:48</p>
              </li>
              <li class="d-flex">
                <p class="w-25 me-1 me-lg-0 text-info">處理狀態</p>
                <p class="w-75">處理中</p>
              </li>
            </ul>
          </div>
          <div class="mb-6">
            <h3 class="h6 mb-2 mb-md-3 fw-bold">聯絡資訊</h3>
            <ul class="list-group-flush">
              <li class="d-lg-flex mb-1 mb-md-2">
                <p class="w-25 me-3 me-lg-0 text-info">姓名</p>
                <p class="w-75">s</p>
              </li>
              <li class="d-lg-flex mb-2">
                <p class="w-25 me-3 me-lg-0 text-info">運送地址</p>
                <p class="w-75">sdf</p>
              </li>
              <li class="d-lg-flex mb-2">
                <p class="w-25 me-3 me-lg-0 text-info">聯絡電話</p>
                <p class="w-75">0981349388</p>
              </li>
              <li class="d-lg-flex">
                <p class="w-25 me-3 me-lg-0 text-info">聯絡信箱</p>
                <p class="w-75">whalekiller03@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-6">
            <h3 class="h6 mb-2 mb-md-3 fw-bold">購買項目</h3>
            <ul class="list-group list-group-flush">
              <li>
                <div class="d-md-flex justify-content-between mb-md-2">
                  <p>牛雞生肉餐 x 1</p>
                  <p>NT$ 5,500</p>
                </div>
              </li>
              <li class="d-flex justify-content-between">
                <p>總計</p>
                <p class="fw-bold">NT$ 5,500</p>
              </li>
            </ul>
          </div>
          <div class="mb-2 mb-lg-4">
            <h3 class="h6 mb-2 mb-md-3 fw-bold">付款狀態</h3>
            <ul class="list-group-flush bg-gray-100 py-4">
              <li class="d-flex mb-2">
                <p class="me-2">付款方式/</p>
                <p>信用卡</p>
              </li>
              <li class="d-flex">
                <p class="me-2">付款狀態/</p>
                <p class="bg-danger rounded text-white px-2">未付款</p>
              </li>
            </ul>
          </div>
          <div class="text-end">
            <button type="button" class="btn btn-primary px-6 text-white">付款</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
