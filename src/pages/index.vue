<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-16 22:21:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-20 20:15:44
 * @Description:index
-->
<script setup lang="ts">
window.oncontextmenu = (e: MouseEvent) => {
  e.preventDefault()
}
const iconSize = 70
const iconGapX = 35
const iconGapY = 20
const iconRadius = 15
const iconNameSize = 14
const iconNameColor = 'rgba(255,255,255,0.6)'
const varStyle = {
  '--icon-size': `${iconSize}px`,
  '--icon-gap-x': `${iconGapX}px`,
  '--icon-gap-y': `${iconGapY}px`,
  '--icon-radius': `${iconRadius}px`,
  '--icon-name-size': `${iconNameSize}px`,
  '--icon-name-color': iconNameColor,
}

</script>

<template>
  <div
    w-full
    h-full
    flex
    flex-col
    :style="varStyle"
  >
    <!-- 时间 -->
    <AppDateTime />
    <!-- 搜索 -->
    <AppSearch />
    <!-- apps -->
    <Apps />
  </div>
</template>
