<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-23 12:39:29
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-10-01 18:38:03
 * @Description:
-->
<script setup lang="ts">
const emit = defineEmits(['menu-click'])
const showMenu = ref(false)
const menuStyle = ref({})
const showType = ref('')
const menuData = ref({})
let timer: NodeJS.Timeout | null = null
const { width, height } = useWindowSize()

function open(x: number, y: number, data: DOMStringMap) {
  showType.value = data.shyType ?? ''
  if (!showType.value)
    return
  showMenu.value = true
  if (timer)
    clearTimeout(timer)
  timer = setTimeout(() => {
    showMenu.value = false
    timer = null
  }, 5000)
  const style: any = {}
  if (x + 150 > width.value)
    style.right = '0px'
  else style.left = `${x}px`
  if (y + 150 > height.value)
    style.bottom = '0px'
  else style.top = `${y}px`
  menuStyle.value = style
  menuData.value = data
}

const menus: any = {
  'app-item': [
    { icon: '#icon-location', title: '在新标签页打开', emit: 'new-tab-open' },
    { icon: '', title: '大', emit: 'size-big' },
    { icon: '', title: '中', emit: 'size-middle' },
    { icon: '', title: '小', emit: 'size-small' },
    { icon: '#icon-create', title: '编辑', emit: 'edit' },
    { icon: '#icon-delete', title: '删除', emit: 'delete' },
  ],
  'tab-item': [
    { icon: '#icon-location', title: '在新标签页打开', emit: 'new-tab-open' },
    { icon: '#icon-create', title: '编辑', emit: 'edit' },
    { icon: '#icon-delete', title: '删除', emit: 'delete' },
  ],
  'main': [
    { icon: '#icon-add-box', title: '添加App', emit: 'add-app' },
    { icon: '#icon-settings-applications', title: '设置', emit: 'setting' },
  ],
  'app-folder': [
    { icon: '', title: '大', emit: 'size-big' },
    { icon: '', title: '中', emit: 'size-middle' },
    { icon: '', title: '小', emit: 'size-small' },
    { icon: '#icon-create', title: '编辑', emit: 'edit' },
    { icon: '#icon-delete', title: '删除', emit: 'delete' },
  ],
}

function handleClick(e: MouseEvent) {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  showMenu.value = false
}
watchEffect(() => {
  if (showMenu.value) {
    setTimeout(() => {
      window.addEventListener('click', handleClick)
    })
  }
  else { window.removeEventListener('click', handleClick) }
})
defineExpose({ open })
</script>

<template>
  <transition name="bounce">
    <div
      v-show="showMenu"
      fixed
      w-150px
      z-9999
      flex
      flex-col
      py-2
      bg="white/40"
      backdrop-blur-md
      :style="menuStyle"
    >
      <div
        v-for="(item, index) in menus[showType]"
        :key="index"
        w-full
        py-0
        px-2
        leading-35px
        flex
        justify-start
        items-center
        text-xs
        hover:bg="white/80"
        hover-color="black/50"
        cursor-pointer
        @click="emit('menu-click', { type: item.emit, data: menuData })"
      >
        <svg class="icon" w-4 h-4 mr-1 aria-hidden="true">
          <use :xlink:href="item.icon" />
        </svg>
        <div>{{ item.title }}</div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform-origin: left top;
    transform: scale(0);
  }
  50% {
    opacity: 0.5;
    transform-origin: left top;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform-origin: left top;
    transform: scale(1);
  }
}
</style>
