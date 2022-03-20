<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-20 19:59:54
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-20 20:41:56
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
  <swiper :css-mode="true" :pagination="true" :modules="[Pagination]">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<style>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {

}

</style>
