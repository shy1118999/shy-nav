<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-20 14:27:24
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-10-01 20:00:12
 * @Description: AppDateTime
-->
<script lang="ts" setup>
const emits = defineEmits(['click-time'])

const now = useNow()
// const week = {
//   0: 'Sunday',
//   1: 'Monday',
//   2: 'Tuesday',
//   3: 'Wednesday',
//   4: 'Thursday',
//   5: 'Friday',
//   6: 'Saturday',
// }
const weekZh: Record<number, string> = {
  0: '星期日',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
}
</script>

<template>
  <div
    flex="~"
    justify-center
    text-7xl
    font-mono
    pt-10
    @click.stop="emits('click-time')"
  >
    {{ now.getHours().toString().padStart(2, '0') }}:{{ now.getMinutes().toString().padStart(2, '0') }}:{{ now.getSeconds().toString().padStart(2, '0') }}
  </div>
  <div
    flex="~"
    justify-center
    text-xl
    font-mono
    dark-50
  >
    {{ now.getFullYear() }}年{{ now.getMonth() + 1 }}月{{ now.getDate() }}日 {{ weekZh[now.getDay()] }}
  </div>
</template>
