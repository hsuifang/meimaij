import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay, Pagination, Navigation, Thumbs } from 'swiper/core'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([Autoplay, Pagination, Navigation, Thumbs])

export default (app) => {
  app.component('Swiper', Swiper)
  app.component('SwiperSlide', SwiperSlide)
}
