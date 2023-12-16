<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-26 15:38:32
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:47:13
 * @Description: create app
-->
<script setup lang="ts">
import allApps from '~/config/apps'

const emit = defineEmits(['close'])
const apps = ref([...allApps])
function noop(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
}
function handleClickMask(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  emit('close')
}
function handleInput(e: any) {
  apps.value = allApps.filter((x) => {
    return x.name.includes(e.target?.value)
  })
}
</script>

<template>
  <div
    fixed
    top-0
    bottom-0
    left-0
    right-0
    bg="gray/30"
    backdrop-blur-sm
    z-99999
    @click.stop="handleClickMask"
    @contextmenu.stop="handleClickMask"
  >
    <div
      absolute
      right-0
      top-0
      overflow-auto
      p-5
      flex
      flex-col
      justify-start
      items-start
      bottom-0
      bg="gray/60"
      w-120
      z-999999
      @click.stop="noop"
      @contextmenu.stop="noop"
    >
      <div
        w-full
        sticky
        top-0
        rounded-xl
        bg="white/80"
      >
        <input h-60px p-2 color="black/50" text-3xl w-full leading-60px bg-transparent @input="handleInput">
      </div>
      <div
        v-for="item, index in apps"
        :key="index"
        w-full
        my-2
        flex
        rounded-xl
        bg="white/20"
        p-3
      >
        <img :src="item.icon" w-70px h-70px rounded-xl>
        <div p-2 flex flex-col w-full items-start justify-around style="width: calc(100% - 70px)">
          <div text-left truncate w-full :title="item.name">
            {{ item.name }}
          </div>
          <div text-left truncate w-full :title="item.description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
