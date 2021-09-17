<template>
<div class="banner">
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true,
      dynamicBullets: true
    }"
  >
    <swiper-slide v-for="item in 3" :key="item">
      <img src="../assets/img/banner.png" alt="banner">
    </swiper-slide>
  </swiper>
</div>
</template>
<script>
import { Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, A11y, Autoplay],
    }
  }
}
</script>

<style scoped lang="scss">
.banner{
  margin-bottom: 20px;
}
img{
  width: 100%;
  vertical-align: middle;
}
</style>