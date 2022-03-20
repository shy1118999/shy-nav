<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-20 14:29:50
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-20 14:29:53
 * @Description:AppSearch
-->
<script lang="ts" setup>
const searchValue = ref('')
function search() {
  window.open(`https://www.baidu.com/s?wd=${searchValue.value}`, '_blank')
}
</script>
<template>
  <div
    flex="~"
    justify-center
    items-center
    md:mx-20
    lg:mx-30
    xl:mx-100
    my-10
    rounded-50
    h-15
    overflow-hidden
    bg-white
    bg-opacity-10
    backdrop-blur-md
  >
    <div i-carbon:search text-xl ml-5 />
    <input
      v-model="searchValue"
      placeholder="Enter your search content..."
      type="text"
      flex-1
      p-5
      focus:outline-none
      bg="transparent"
      @keydown.enter="search"
    >
    <button btn focus:outline-none px-10 flex-2 h-full @click="search">
      Search
    </button>
  </div>
</template>
