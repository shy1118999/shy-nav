<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-23 22:36:24
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-24 23:03:11
 * @Description: setting
-->
<script setup lang="ts">
import appItemSetting from '~/storage/appItemSetting'
const emit = defineEmits(['close'])

function noop(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
}
function handleClickMask(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  emit('close')
}

function handleChange(e) {
  console.log(e)
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
      <!-- 图标 -->
      <p p-3>
        图标
      </p>

      <!-- 图标名称：是否显示 -->
      <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3>
        图标名称
        <div flex bg="gray/50" rounded-xl p-0 leading-35px overflow-hidden cursor-pointer>
          <div :class="{ 'bg-green-400': appItemSetting.showIconName }" flex-1 w-full h-full px-2 @click="appItemSetting.showIconName = true">
            显示
          </div>
          <div :class="{ 'bg-green-400': !appItemSetting.showIconName }" flex-1 w-full h-full px-2 @click="appItemSetting.showIconName = false">
            隐藏
          </div>
        </div>
      </div>
      <!-- 图标名称：颜色 -->
      <!-- <div>
        图标颜色
      </div> -->
      <!-- 图标大小  -->
      <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3 leading-35px>
        <div>图标大小</div>
        <input v-model="appItemSetting.iconSize" flex-1 mx-5 type="range" min="30" max="150" step="1">
        <div w-20>
          {{ `${appItemSetting.iconSize}px` }}
        </div>
      </div>
      <!-- 图标圆角-->
      <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3 leading-35px>
        <div>图标圆角</div>
        <input v-model="appItemSetting.iconRadius" flex-1 mx-5 type="range" min="0" max="36" step="1">
        <div w-20>
          {{ `${appItemSetting.iconRadius}px` }}
        </div>
      </div>
      <!-- 不透明度 -->
      <!-- 间距 -->
      <p p-3>
        间距
      </p>
      <!-- 行间距 -->
      <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3 leading-35px>
        <div>行间距</div>
        <input v-model="appItemSetting.iconGapX" flex-1 mx-5 type="range" min="0" max="100" step="1">
        <div w-20>
          {{ `${appItemSetting.iconGapX}px` }}
        </div>
      </div>
      <!-- 列间距 -->
      <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3 leading-35px>
        <div>列间距</div>
        <input v-model="appItemSetting.iconGapY" flex-1 mx-5 type="range" min="0" max="100" step="1">
        <div w-20>
          {{ `${appItemSetting.iconGapY}px` }}
        </div>
      </div>
    </div>
  </div>
</template>
