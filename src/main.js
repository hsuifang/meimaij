import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'
import swiper from './plugins/swiper'
import veeValidate from './plugins/vee-validate'

import 'animate.css'

import animationDirective from './directive/animation'

const app = createApp(App)
const head = createHead()

app.use(createPinia()).use(head).use(router).use(swiper).use(veeValidate)
app.directive('animate', animationDirective)

app.mount('#app')
