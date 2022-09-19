<script setup></script>

<template>
  <div class="container py-5">
    <nav aria-label="breadcrumb mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>

    <form class="py-3">
      <div class="row gx-lg-5">
        <div class="col-lg-6">
          <h3 class="h5 mb-md-4 border-start border-4 border-primary ps-3 py-2">購買者資訊</h3>
          <div class="from-group mb-3">
            <label for="name" class="form-label">姓名</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="from-group mb-3">
            <label for="name" class="form-label">Email</label>
            <input type="email" class="form-control" id="name" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="from-group mb-3">
            <label for="phone" class="form-label">電話</label>
            <input type="tel" class="form-control" id="phone" aria-describedby="phoneHelp" />
            <div id="phoneHelp" class="form-text">
              We'll never share your phone number with anyone else.
            </div>
          </div>
          <div class="from-group mb-3">
            <label for="address" class="form-label">地址</label>
            <input type="text" class="form-control" id="address" aria-describedby="address" />
          </div>
          <div class="from-group mb-3">
            <label for="memo" class="form-label">留言或備註</label>
            <textarea name="memo" id="memo" cols="30" rows="5" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="h5 mb-md-4 border-start border-4 border-primary ps-3 py-2">購買項目</h3>
          <ul class="bg-gray-100 list-group list-group-flush p-2 p-lg-5 mb-3 mb-lg-4">
            <li class="list-group-item d-flex justify-content-md-between">
              <p class="fw-bold">名稱 <span class="d-md-none">/</span></p>
              <p class="fw-bold">金額</p>
            </li>
            <li class="list-group-item">
              <div class="d-md-flex justify-content-between">
                <p>牛雞生肉餐 x 1</p>
                <p>NT$ 5,500</p>
              </div>
              <!---->
            </li>

            <li class="list-group-item d-flex justify-content-between">
              <p class="fw-bold">小計</p>
              <p class="fw-bold">NT$ 5,500</p>
            </li>

            <li class="list-group-item d-flex justify-content-between">
              <p class="fw-bold">折扣</p>
              <p class="fw-bold">NT$ 0</p>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <p class="fw-bold">總計</p>
              <p class="fw-bold">NT$ 5,500</p>
            </li>
            <li class="list-group-item d-flex justify-content-end">
              <input
                id="coupon"
                type="text"
                class="form-control me-2"
                style="width: 200px"
              /><button type="button" class="btn btn-secondary text-white">優惠券</button>
            </li>
          </ul>
          <div class="text-end d-none d-lg-block">
            <button type="submit" class="btn btn-primary px-4 text-white">購買確認</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss"></style>
