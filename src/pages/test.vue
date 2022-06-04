<!--
 * @Author: shaohang-shy
 * @Date: 2022-05-28 08:58:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-05-28 09:05:23
 * @Description: Test
-->
<script setup lang="ts">
const dialog = ref<HTMLDialogElement | null>(null)
function showDialog() {
  dialog.value?.showModal()
}
function handleDialogClose(e) {
  console.log(e)
}
</script>
<template>
  <div>
    Test
    <button @click="showDialog">
      show
    </button>
    <dialog ref="dialog" @close="handleDialogClose">
      This is Dialog.
    </dialog>
  </div>
</template>
