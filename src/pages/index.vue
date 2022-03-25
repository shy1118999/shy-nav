<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-16 22:21:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-25 23:29:01
 * @Description:index
-->
<script setup lang="ts">
import apps from '~/storage/apps'
import appItemSetting from '~/storage/appItemSetting'
const menuRef = ref()
const showSettingMenu = ref(false)

function getElData(e: HTMLElement): DOMStringMap {
  if (!e.dataset.shyType)
    return getElData(e.parentElement as HTMLElement)
  return e.dataset
}

window.oncontextmenu = (e: MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
  const data = getElData(e.target as HTMLElement)
  menuRef.value.open(e.pageX, e.pageY, data)
}

function handleMenuClick(x: { type: string; data: DOMStringMap }) {
  const { type, data } = x
  switch (type) {
    case 'new-tab-open':
      window.open(data.url, '_blank')
      break
    case 'size-big':
    case 'size-middle':
    case 'size-small':
      handleChangeMenuSize(data, type)
      break
    case 'edit':
      break
    case 'delete':
      break
    case 'add-app':
      break
    case 'setting':
      showSettingMenu.value = true
      break
  }
}

function handleChangeMenuSize(data: DOMStringMap, type: string) {
  const id = Number(data.id)
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
  item.column = type === 'size-big' ? 2 : type === 'size-middle' ? 2 : 1
  item.row = type === 'size-big' ? 4 : type === 'size-middle' ? 2 : 1
}

function handleCloseSettingMenu() {
  showSettingMenu.value = false
}

const varStyle = computed(() => ({
  '--icon-size': `${appItemSetting.value.iconSize}px`,
  '--icon-gap-x': `${appItemSetting.value.iconGapX}px`,
  '--icon-gap-y': `${appItemSetting.value.iconGapY}px`,
  '--icon-radius': `${appItemSetting.value.iconRadius}px`,
  '--icon-name-size': `${appItemSetting.value.iconNameSize}px`,
  '--icon-name-color': appItemSetting.value.iconNameColor,
  '--icon-name-display': appItemSetting.value.showIconName ? 'block' : 'none',
}))

</script>

<template>
  <div data-shy-type="main" select-none w-full h-full flex flex-col :style="varStyle">
    <!-- 时间 -->
    <AppDateTime />
    <!-- 搜索 -->
    <AppSearch />
    <!-- apps -->
    <Apps />
    <!-- 底部Tab -->
    <AppTab />
    <MenuList ref="menuRef" @menu-click="handleMenuClick" />
    <Transition duration="550" name="nested">
      <SettingMenu v-if="showSettingMenu" @close="handleCloseSettingMenu" />
    </Transition>
  </div>
</template>
<style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
