import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import swiper from './plugins/swiper'

import 'virtual:svg-icons-register'
import 'animate.css'

import animationDirective from './directive/animation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(swiper)
app.directive('animate', animationDirective)

app.mount('#app')
