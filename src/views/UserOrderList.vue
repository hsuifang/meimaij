<script setup></script>

<template>
  <div class="container py-5">
    <nav aria-label="breadcrumb mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">會員中心</li>
      </ol>
    </nav>

    <div class="row gx-lg-5">
      <div class="col-lg-3">
        <h3 class="fs-6 d-none d-lg-block p-lg-3 bg-light border-start border-primary border-5">
          會員中心
        </h3>
        <ul class="ps-1 p-lg-4">
          <li class="mb-3"><a href="#" class="w-100 d-block text-dark">購買紀錄</a></li>
          <li class="mb-3"><a href="#" class="w-100 d-block text-primary">我的最愛</a></li>
        </ul>
      </div>
      <div class="col-lg-9">
        <nav class="nav border-bottom border-3 mb-3">
          <a class="nav-link active fs-5 text-gray-500" aria-current="page" href="#"
            >尚未付款<span>0</span></a
          >
          <a class="nav-link fs-5 text-gray-500" href="#">處理中<span>0</span></a>
          <a class="nav-link fs-5 text-gray-500" href="#">待收貨<span>0</span></a>
          <a class="nav-link fs-5 text-gray-500" href="#">已完成<span>0</span></a>
          <a class="nav-link fs-5 text-gray-500" href="#">已取消<span>0</span></a>
        </nav>
        <div class="row">
          <div class="col-lg-12">
            <div class="table-responsive py-lg-3 mb-2 bg-white">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="py-3 border-0">名稱</th>
                    <th scope="col" class="py-3 border-0">數量</th>
                    <th scope="col" class="py-3 border-0">訂購日期</th>
                    <th scope="col" class="py-3 border-0">付款</th>
                    <th scope="col" class="py-3 border-0">明細</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle">
                      <p class="fs-7 text-dark">牛雞生肉餐</p>
                      <p class="fs-8 text-secondary mt-1">NT$ 5,500</p>
                    </td>
                    <td class="align-middle fs-8">1</td>
                    <td class="align-middle fs-8">2022/8/2</td>
                    <td class="align-middle">-</td>
                    <td class="align-middle">
                      <button type="button" class="btn btn-outline-info">
                        <i class="bi bi-eyeglasses"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle">
                      <p class="fs-7 text-dark">雞肉乾糧(小顆粒) 12Kg</p>
                      <p class="fs-8 text-secondary mt-1">NT$ 4,400</p>
                    </td>
                    <td class="align-middle fs-8">2</td>
                    <td class="align-middle fs-8">2022/6/15</td>
                    <td class="align-middle">-</td>
                    <td class="align-middle">
                      <button type="button" class="btn btn-outline-info">
                        <i class="bi bi-eyeglasses"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle">
                      <p class="fs-7 text-dark">牛雞生肉餐</p>
                      <p class="fs-8 text-secondary mt-1">NT$ 11,000</p>
                    </td>
                    <td class="align-middle fs-8">3</td>
                    <td class="align-middle fs-8">2022/6/15</td>
                    <td class="align-middle">
                      <p class="fs-9">2022/6/15 上午12:53:13</p>
                    </td>
                    <td class="align-middle">
                      <button type="button" class="btn btn-outline-info">
                        <i class="bi bi-eyeglasses"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle">
                      <p class="fs-7 text-dark">雞肉乾糧(小顆粒) 12Kg</p>
                      <p class="fs-8 text-secondary mt-1">NT$ 2,200,000</p>
                    </td>
                    <td class="align-middle fs-8">4</td>
                    <td class="align-middle fs-8">2022/6/4</td>
                    <td class="align-middle">
                      <p class="fs-9">2022/6/4 下午5:27:50</p>
                    </td>
                    <td class="align-middle">
                      <button type="button" class="btn btn-outline-info">
                        <i class="bi bi-eyeglasses"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-md-between">
          <p>目前有 <span>10</span> 項訂購</p>
          <ul class="pagination">
            <li class="page-item me-2">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&lt;</a>
            </li>
            <li class="page-item me-2 active"><a class="page-link" href="#">1</a></li>
            <li class="page-item me-2"><a class="page-link" href="#">2</a></li>
            <li class="page-item me-2"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
