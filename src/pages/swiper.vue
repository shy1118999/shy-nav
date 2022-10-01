<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-20 19:59:54
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-10-01 19:59:06
 * @Description: swiper
-->
<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
</script>

<template>
  <Swiper :css-mode="true" :pagination="true" :modules="[Pagination]">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}
</style>
