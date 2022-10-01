<template>
  <footer class="border-top pb-4 pb-md-0">
    <div class="pt-3 pb-6 py-md-6">
      <ul class="list-unstyled list-unstyled d-flex justify-content-center mb-2 mb-lg-3">
        <li class="me-3">
          <a href="https://www.linkedin.com/in/ifang-hsu-101bb6160/" target="_blank"
            ><SvgIcon name="linkin" width="24" height="24"
          /></a>
        </li>
        <li class="me-3">
          <a href="https://github.com/hsuifang" target="_blank">
            <SvgIcon name="github" width="24" height="24" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/hsuifang" target="_blank" class="text-primary">
            <SvgIcon name="twitter" width="24" height="24" />
          </a>
        </li>
      </ul>
      <p class="text-center text-info">© {{ new Date().getFullYear() }} hsuifang / 非營業用途</p>
    </div>
  </footer>
</template>
