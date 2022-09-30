<!--
 * @Author: shaohang-shy
 * @Date: 2022-07-16 17:10:40
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:55:20
 * @Description: EditApp
-->
<script setup lang="ts">
import apps from '~/storage/apps'
import activeIndex from '~/storage/swiperActiveIndex'
import { imageToBase64 } from '~/utils'

const props = defineProps<{
  id: string | number
}>()

const emit = defineEmits(['close'])
const inputUrl = ref('')
const inputTitle = ref('')
const inputIcon = ref('')

watch(() => props.id, (id) => {
  const app = apps.value[activeIndex.value].list.find(item => item.id === id)
  inputUrl.value = app?.url ?? ''
  inputTitle.value = app?.title ?? ''
  inputIcon.value = app?.icon ?? ''
}, { immediate: true })

onMounted(() => {
  document.addEventListener('drop', (e) => {
    // 拖离
    e.preventDefault()
  })
  document.addEventListener('dragleave', (e) => {
    // 拖后放
    e.preventDefault()
  })
  document.addEventListener('dragenter', (e) => {
    // 拖进
    e.preventDefault()
  })
  document.addEventListener('dragover', (e) => {
    // 拖来拖去
    e.preventDefault()
  })
})

async function handleDrop(e: any) {
  const file = e.dataTransfer.files[0]
  if (/^image\/.*?$/.test(file.type))
    inputIcon.value = await imageToBase64(file) as string
}

function handleSubmit() {
  let x = 0
  let y = 0
  for (let i = 0; i < apps.value.length; i++) {
    for (let j = 0; j < apps.value[i].list.length; j++) {
      if (`${apps.value[i].list[j].id}` === `${props.id}`) {
        x = i
        y = j
        break
      }
    }
  }
  const item = apps.value[x].list[y]
  if (!item)
    return
  if (inputUrl.value.trim() !== '')
    item.url = inputUrl.value

  if (inputTitle.value.trim() !== '')
    item.title = inputTitle.value

  if (inputIcon.value.trim() !== '')
    item.icon = inputIcon.value
  emit('close')
}
</script>

<template>
  <!-- 地址 -->
  <p text-left>
    网址
  </p>
  <input
    v-model="inputUrl"
    h-60px
    w-full
    my-2
    text-xl
    px-2
    rounded-xl
    bg="white/50"
    placeholder="请输入网址"
  >
  <!-- 名称 -->
  <p text-left>
    名称
  </p>
  <input
    v-model="inputTitle"
    h-60px
    w-full
    my-2
    text-xl
    px-2
    rounded-xl
    bg="white/50"
    placeholder="请输入名称"
  >
  <!-- 图标 -->
  <p text-left>
    图标
  </p>
  <input
    v-model="inputIcon"
    h-60px
    w-full
    my-2
    text-xl
    px-2
    rounded-xl
    bg="white/50"
    placeholder="请输入图标链接或者拖到下方~"
  >
  <div w-120px h-120px my-2 bg="white/50" rounded-xl @drop="handleDrop">
    <!--  -->
    <img v-if="inputIcon" w-120px h-120px :src="inputIcon">
    <p v-else flex justify-center items-center w-full h-full p-2>
      请将图标拖到此处
    </p>
  </div>
  <div w-full flex justify-end>
    <button btn m-2 @click="handleSubmit">
      确定
    </button>
  </div>
</template>
