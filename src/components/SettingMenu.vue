<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-23 22:36:24
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:53:34
 * @Description: setting
-->
<script setup lang="ts">
import appItemSetting from '~/storage/appItemSetting'
import background from '~/storage/background'
import backgroundHistory from '~/storage/backgroundHistory'
const bgType = ref(background.value.type)
const bgSrc = ref(background.value.src)
const bgColor = ref(background.value.backgroundColor)

const colors = [
  { name: '红色', key: 'red', value: '#db2828' },
  { name: '橘黄色', key: 'orange', value: '#f2711c' },
  { name: '黄色', key: 'yellow', value: '#fbbd08' },
  { name: '橄榄绿色', key: 'olive', value: '#b5cc18' },
  { name: '绿色', key: 'green', value: '#21ba45' },
  { name: '茶绿色', key: 'teal', value: '#00b5ad' },
  { name: '蓝色', key: 'blue', value: '#2185d0' },
  { name: '紫罗兰色', key: 'violet', value: '#6435c9' },
  { name: '紫色', key: 'purple', value: '#a333c8' },
  { name: '粉色', key: 'pink', value: '#e03997' },
  { name: '褐色', key: 'brown', value: '#a5673f' },
  { name: '灰色', key: 'grey', value: '#767676' },
  { name: '黑色', key: 'black', value: '#1b1c1d' },
  { name: '白色', key: 'white', value: '#ffffff' },
]

function handleSubmitBg() {
  background.value.type = bgType.value
  background.value.src = bgSrc.value
  background.value.backgroundColor = bgColor.value
  const index = backgroundHistory.value.findIndex((x: any) => x.src === bgSrc.value)
  if (index > -1)
    backgroundHistory.value.splice(index, 1)

  backgroundHistory.value.unshift({ ...background.value })
}

function handleResetBg() {
  bgType.value = background.value.type
  bgSrc.value = background.value.src
  bgColor.value = background.value.backgroundColor
}

function handleShowBg(bg: any) {
  bgType.value = bg.type
  bgSrc.value = bg.src
  bgColor.value = bg.backgroundColor
}

function toUrl(e: any) {
  window.open(e.target.href, '_blank')
}

function handleExportSetting() {
  const setting = {} // 定义数据集
  for (let i = 0; i < localStorage.length; i++) {
    // 获取key 索引从0开始
    const key = localStorage.key(i)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setting[key] = localStorage.getItem(key)
  }
  const data = JSON.stringify(setting)
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'shy-nav-setting.json'
  a.click()
  URL.revokeObjectURL(url)
}

function handleImportSetting() {
  const input = document.createElement('input')
  input.type = 'file'
  input.onchange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (e: any) => {
      const data = JSON.parse(e.target.result)
      for (const key in data)
        localStorage.setItem(key, data[key])
      window.location.reload()
    }
  }
  input.click()
}
</script>

<template>
  <!-- 设置导入/导出 -->
  <p w-full text-left p-3>
    设置
  </p>
  <div flex w-full align-center justify-around>
    <div btn @click="handleExportSetting">
      导出现有配置
    </div>
    <div btn @click="handleImportSetting">
      导入已有配置
    </div>
  </div>
  <div mt-5 h-0 w-full border-t border-dashed />
  <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3>
    底部显示
    <div flex bg="gray/50" rounded-xl p-0 leading-35px overflow-hidden cursor-pointer w-7em>
      <div :class="{ 'bg-green-400': appItemSetting.showTab }" flex-1 w-full h-full px-2 @click="appItemSetting.showTab = true">
        Tab
      </div>
      <div :class="{ 'bg-green-400': !appItemSetting.showTab }" flex-1 w-full h-full px-2 @click="appItemSetting.showTab = false">
        一言
      </div>
    </div>
  </div>
  <!-- 背景 -->
  <p w-full text-left p-3>
    背景
  </p>
  <input v-model="bgSrc" placeholder="Background Image Url" my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3 leading-35px>
  <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3 leading-35px>
    <div>背景默认颜色</div>
    <input v-model="bgColor" z-9999999 w-5 h-5 type="color" @change="() => {}" @click="() => {}">
  </div>
  <div w-full flex justify-end>
    <button btn m-2 @click="handleResetBg">
      取消修改
    </button>
    <button btn m-2 @click="handleSubmitBg">
      修改
    </button>
  </div>
  <p w-full text-left p-3>
    历史背景
  </p>
  <div w-full h-88px rounded-xl bg="white/20" p-10px overflow-auto style="white-space: nowrap;">
    <img
      v-for="bg in backgroundHistory"
      :key="bg.src"
      w-120px h-68px
      px-2 m-0
      inline-block
      cursor-pointer
      :src="bg.src"
      @click="handleShowBg(bg)"
    >
  </div>
  <p>Tips：可以在这查找背景<a href="https://wallhaven.cc/" color="#1a0dab" target="_blank" @click="toUrl">wallhaven</a>、<a href="https://unsplash.com/" color="#1a0dab" target="_blank" @click="toUrl">unsplash</a>。</p>
  <div mt-5 h-0 w-full border-t border-dashed />
  <!-- 图标 -->
  <p w-full text-left p-3>
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
  <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3>
    图标名称颜色
    <div flex flex-row flex-wrap w-50>
      <div v-for="color in colors" :key="color.value" m-1 w-5 h-5 rounded-full cursor-pointer :style="{ background: color.value }" @click="appItemSetting.iconNameColor = color.value" />
    </div>
  </div>
  <!-- 图标大小  -->
  <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3 leading-35px>
    <div>图标大小</div>
    <input v-model="appItemSetting.iconSize" flex-1 mx-5 type="range" min="30" max="150" step="1">
    <div w-20>
      {{ `${appItemSetting.iconSize}px` }}
    </div>
  </div>
  <!-- 图标圆角 -->
  <div my-2 w-full flex items-center justify-between rounded-xl bg="white/20" p-3 leading-35px>
    <div>图标圆角</div>
    <input v-model="appItemSetting.iconRadius" flex-1 mx-5 type="range" min="0" max="36" step="1">
    <div w-20>
      {{ `${appItemSetting.iconRadius}px` }}
    </div>
  </div>
  <!-- 不透明度 -->
  <!-- 间距 -->
  <p w-full text-left p-3>
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
</template>

<style>
::-webkit-color-swatch-wrapper {
  z-index: 99999999;
}
</style>
