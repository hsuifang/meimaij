import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import swiper from './plugins/swiper'
import veeValidate from './plugins/vee-validate'

import 'virtual:svg-icons-register'
import 'animate.css'

import animationDirective from './directive/animation'

const app = createApp(App)

app.use(createPinia()).use(router).use(swiper).use(veeValidate)
app.directive('animate', animationDirective)

app.mount('#app')
