<script setup></script>

<template>
  <nav
    class="navbar navbar-expand-md navbar-light border-bottom shadow-lg is-narrow sticky-top py-3"
  >
    <div class="container">
      <div class="d-flex">
        <a class="navbar-brand" href="#">MEIMAIJ</a>
        <div class="d-none d-md-block ms-3">
          <ul class="navbar-nav mt-2 mt-md-0">
            <li class="nav-item mx-1">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <ul class="d-none d-md-flex">
        <li class="mx-1">
          <SvgIcon name="favorite" width="24" height="24" />
        </li>
        <li class="mx-1">
          <SvgIcon name="cart" width="24" height="24" />
        </li>
        <li class="mx-1">
          <SvgIcon name="portfolio" width="24" height="24" />
        </li>
      </ul>

      <button
        class="navbar-toggler d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<style></style>
