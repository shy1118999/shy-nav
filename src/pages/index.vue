<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-16 22:21:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-07-16 17:41:00
 * @Description:index
-->
<script setup lang="ts">
import apps from '~/storage/apps'
import appItemSetting from '~/storage/appItemSetting'
import activeIndex from '~/storage/swiperActiveIndex'
import AppSentences from '~/components/AppSentences.vue'
const menuRef = ref()
const showSettingMenu = ref(false)
const showCreateApp = ref(false)
const showEditApp = ref(false)
const editAppId = ref<string | number>('')

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
      if (data.shyType === 'app-item') {
        editAppId.value = data.id ?? ''
        showEditApp.value = true
      }
      break
    case 'delete':
      handleDeleteApp(data)
      break
    case 'add-app':
      showCreateApp.value = true
      break
    case 'setting':
      showSettingMenu.value = true
      break
  }
}

function handleDeleteApp(data: DOMStringMap) {
  const { id } = data
  const index = apps.value[activeIndex.value].list.findIndex(item => item.id == id)
  if (index === -1) return
  apps.value[activeIndex.value].list.splice(index, 1)
}

function handleChangeMenuSize(data: DOMStringMap, type: string) {
  const id = data.id
  let x = 0
  let y = 0
  for (let i = 0; i < apps.value.length; i++) {
    for (let j = 0; j < apps.value[i].list.length; j++) {
      if (`${apps.value[i].list[j].id}` === `${id}`) {
        x = i
        y = j
        break
      }
    }
  }
  const item = apps.value[x].list[y]
  if (data.shyType === 'app-folder') {
    item.column = type === 'size-big' ? 2 : type === 'size-middle' ? 1 : 1
    item.row = type === 'size-big' ? 2 : type === 'size-middle' ? 2 : 1
    return
  }
  item.column = type === 'size-big' ? 2 : type === 'size-middle' ? 2 : 1
  item.row = type === 'size-big' ? 4 : type === 'size-middle' ? 2 : 1
}

function handleCreateApp(data: any) {
  apps.value[activeIndex.value].list.push({
    ...data,
  })
  showCreateApp.value = false
}

function handleCreatePage(data: any) {
  apps.value.push({ ...data })
  showCreateApp.value = false
}

</script>

<template>
  <div data-shy-type="main" select-none w-full h-full flex flex-col>
    <!-- 时间 -->
    <AppDateTime />
    <!-- 搜索 -->
    <AppSearch />
    <!-- apps -->
    <Apps />
    <!-- 底部Tab -->
    <AppTab v-if="appItemSetting.showTab" />
    <!-- <AppPagination v-else /> -->
    <AppSentences v-else />
    <MenuList ref="menuRef" @menu-click="handleMenuClick" />
    <Drawer :show="showSettingMenu" @close="showSettingMenu = false">
      <SettingMenu />
    </Drawer>
    <Drawer :show="showCreateApp" @close="showCreateApp = false">
      <CreateNewApp @submit="handleCreateApp" @create-page="handleCreatePage" />
    </Drawer>
    <Drawer :show="showEditApp" @close="showEditApp = false">
      <EditApp :id="editAppId" @close="showEditApp = false" />
    </Drawer>
  </div>
</template>
<style>
/* body{
  --icon-size: v-bind(`${appItemSetting.iconSize}px`);
  --icon-gap-x: v-bind(`${appItemSetting.iconGapX}px`);
  --icon-gap-y: v-bind(`${appItemSetting.iconGapY}px`);
  --icon-radius: v-bind(`${appItemSetting.iconRadius}px`);
  --icon-name-size: v-bind(`${appItemSetting.iconNameSize}px`);
  --icon-name-color: v-bind(appItemSetting.iconNameColor);
  --icon-name-display: v-bind(appItemSetting.showIconName ? 'block' : 'none');
} */
</style>
