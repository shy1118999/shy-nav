<!--
 * @Author: shaohang-shy
 * @Date: 2021-12-28 23:38:53
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-20 12:35:38
 * @Description: Background Component
-->
<script lang="ts" setup>
type Type = 'image'
interface Props {
  type?: Type
  src?: string
  backgroundColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'image',
  src: 'https://hao.shaohang.xin/bg/bg4.jpg',
  backgroundColor: '#0084FF',
})
</script>
<template>
  <div
    fixed
    left-0
    right-0
    top-0
    bottom-0
    transition-ease
    transition-all
    transition-duration-400
    z--1

    :style="{
      backgroundColor: props.backgroundColor,
    }"
  >
    <div
      v-if="props.type == 'image'"
      transition-duration-200
      h-full
      w-full
      bg-cover
      object-cover
      bg-no-repeat
      bg-center
      :style="{
        backgroundImage: `url(${props.src})`,
      }"
    />
  </div>
</template>
<style scoped>
.app-background {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  filter: blur(0px);
  z-index: -1;
  transition: 0.4s ease;
}
.app-background-img {
  position: relative;
  transition: 0.2s;
  opacity: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.3s;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
