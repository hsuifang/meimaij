<script setup></script>

<template>
  <!-- swiper -->
  <div class="masthead d-flex flex-column justify-content-center">
    <div class="container">
      <div class="p-3">
        <div class="typing">Witamy! Idziesz ze nami</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.typing {
  width: 21ch;
  color: white;
  animation: typing 2s steps(21), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #ea8484;
  font-size: 2em;
  background: rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.masthead {
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
}
@media screen and (max-width: 992px) {
  .masthead {
    height: 400px;
  }
}
</style>
