<!--
 * @Author: shaohang-shy
 * @Date: 2021-12-28 23:51:07
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-28 22:25:42
 * @Description: AppItem
-->
<script lang="ts" setup>
interface Props {
  icon: string
  url: string
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  icon: 'https://files.codelife.cc/website/jd.svg',
  url: 'https://jd.com',
  title: 'icon',
})

function handleClick() {
  window.open(props.url, '_blank')
}

</script>
<template>
  <div
    relative
    overflow-hidden
    w-full
    h-full
    flex
    flex-col
    items-center
    justify-center
    cursor-pointer
    class="app-item-icon"
    @click="handleClick"
  >
    <img :src="props.icon" :title="props.title" block object-cover w-full h-full>
  </div>
</template>
<style scoped>
.app-item-icon {
  border-radius: var(--icon-radius);
}
</style>
