<script setup>
import { find } from 'lodash'

const $route = useRoute()
const $router = useRouter()

const contentSelected = ref('orders')
const contentList = [
  {
    title: '我的最愛',
    pathname: 'favorite',
  },
  {
    title: '購買紀錄',
    pathname: 'orders',
  },
]

const routerContentSelected = computed(() => $route.name)

const changeRoute = (name) => {
  $router.push({ name })
  contentSelected.value = name
}

watch(
  () => routerContentSelected,
  () => {
    contentSelected.value = val
  }
)
onMounted(() => {
  contentSelected.value = find(contentList, (content) => content.pathname === $route.name)?.pathname
})
</script>

<template>
  <div class="container pt-0 pb-4 py-lg-5">
    <PageTitle />
    <div class="row gx-lg-5">
      <div class="col-lg-3">
        <h3 class="fs-7 d-none d-lg-block p-lg-3 bg-light border-start border-primary border-5">
          會員中心
        </h3>
        <ul class="ps-1 productType-select p-lg-4">
          <li
            class="mb-3"
            v-for="content in contentList"
            :key="content.pathname"
            @click="changeRoute(content.pathname)"
          >
            <a
              href="#"
              class="w-100 d-block"
              :class="contentSelected === content.pathname ? 'text-primary' : 'text-dark'"
              @click.prevent
              >{{ content.title }}
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-9">
        <router-view />
      </div>
    </div>
  </div>
</template>
