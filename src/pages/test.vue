<!--
 * @Author: shaohang-shy
 * @Date: 2022-05-28 08:58:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-10-01 18:39:13
 * @Description: Test
-->
<script setup lang="ts">
</script>

<template>
  <div p-10>
    Test
  </div>
</template>

<style>
@keyframes slideDown {
  from {
    transform: translateY(-100px);
  }

  to {
    transform: translateY(0);
  }
}

.dialog[open] {
  animation: slideDown 0.2s ease;
}

.dialog {
  animation: slideDown 0.2s ease;

}
</style>
