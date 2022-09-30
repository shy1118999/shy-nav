<!--
 * @Author: shaohang-shy
 * @Date: 2022-04-04 18:18:10
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:56:24
 * @Description:
-->
<script setup lang="ts">
const bgColor = ref('#ffffff')
</script>

<template>
  <div p-20>
    <input v-model="bgColor" w-5 h-5 type="color">

    <!-- <history-today /> -->
    <div w-70px h-70px m-2>
      <calendar :column="1" :row="1" />
    </div>
    <div w-160px h-175px m-2>
      <calendar :column="2" :row="2" />
    </div>
    <div w-340px h-175px m-2>
      <calendar :column="4" :row="2" />
    </div>
  </div>
</template>
