<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-16 22:21:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-04-11 20:27:04
 * @Description:index
-->
<script setup lang="ts">
import apps from '~/storage/apps'
import activeIndex from '~/storage/swiperActiveIndex'
import appItemSetting from '~/storage/appItemSetting'
import AppSentences from '~/components/AppSentences.vue'
const menuRef = ref()
const showSettingMenu = ref(false)
const showCreateApp = ref(false)

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
      console.log('edit')
      break
    case 'delete':
      console.log('delete')
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
  console.log(x, y)
  const item = apps.value[x].list[y]
  if (data.shyType === 'app-folder') {
    item.column = type === 'size-big' ? 2 : type === 'size-middle' ? 1 : 1
    item.row = type === 'size-big' ? 2 : type === 'size-middle' ? 2 : 1
    return
  }
  item.column = type === 'size-big' ? 2 : type === 'size-middle' ? 2 : 1
  item.row = type === 'size-big' ? 4 : type === 'size-middle' ? 2 : 1
}

function handleCloseSettingMenu() {
  showSettingMenu.value = false
}
function handleCloseCrateApp() {
  showCreateApp.value = false
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

const varStyle = computed(() => ({
  '--icon-size': `${appItemSetting.value.iconSize}px`,
  '--icon-gap-x': `${appItemSetting.value.iconGapX}px`,
  '--icon-gap-y': `${appItemSetting.value.iconGapY}px`,
  '--icon-radius': `${appItemSetting.value.iconRadius}px`,
  '--icon-name-size': `${appItemSetting.value.iconNameSize}px`,
  '--icon-name-color': appItemSetting.value.iconNameColor,
  '--icon-name-display': appItemSetting.value.showIconName ? 'block' : 'none',
}))
function showJson(style: any) {
  const s = []
  for (const i in style)
    s.push(`${i}:${style[i]}`)
  return s.join(';')
}
watchEffect(() => {
  document.body.setAttribute('style', showJson(varStyle.value))
})

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
    <AppSentences v-else />
    <MenuList ref="menuRef" @menu-click="handleMenuClick" />
    <Transition :duration="550" name="nested">
      <SettingMenu v-if="showSettingMenu" @close="handleCloseSettingMenu" />
    </Transition>
    <Transition :duration="550" name="nested">
      <CreateNewApp v-if="showCreateApp" @close="handleCloseCrateApp" @submit="handleCreateApp" @create-page="handleCreatePage" />
    </Transition>
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
