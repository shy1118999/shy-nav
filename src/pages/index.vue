<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-16 22:21:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-22 23:03:27
 * @Description:index
-->
<script setup lang="ts">
import apps from '~/storage/apps'

function getElData(e: HTMLElement): DOMStringMap {
  if (!e.dataset.shyType)
    return getElData(e.parentElement as HTMLElement)
  return e.dataset
}

window.oncontextmenu = (e: MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
  const data = getElData(e.target as HTMLElement)
  if (data.shyType === 'app-item') {
    const id = Number(data.id)
    console.log(id)
    let x = 0
    let y = 0
    for (let i = 0; i < apps.value.length; i++) {
      for (let j = 0; j < apps.value[i].list.length; j++) {
        if (apps.value[i].list[j].id === id) {
          x = i
          y = j
          break
        }
      }
    }
    const item = apps.value[x].list[y]
    item.column = 1
    item.row = 1
  }
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
  <div data-shy-type="main" w-full h-full flex flex-col :style="varStyle">
    <!-- 时间 -->
    <AppDateTime />
    <!-- 搜索 -->
    <AppSearch />
    <!-- apps -->
    <Apps />
    <!-- 底部Tab -->
    <AppTab />
  </div>
</template>
