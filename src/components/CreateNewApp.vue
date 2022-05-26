<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-27 19:02:08
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-04-04 20:14:20
 * @Description:
-->
<script setup lang="ts">
import { v4 as uuid } from 'uuid'

const emit = defineEmits(['close', 'submit', 'createPage'])
const inputUrl = ref('')
const inputTitle = ref('')
const inputIcon = ref('')
function noop(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
}
function handleClickMask(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  emit('close')
}

function handleDrop(e: any) {
  const file = e.dataTransfer.files[0]
  if (/^image\/.*?$/.test(file.type))
    handleImageToBase64(file)
}
function handleImageToBase64(image: any) {
  const reader = new FileReader()
  reader.onload = (e) => {
    inputIcon.value = reader.result?.toString()
  }
  reader.readAsDataURL(image)
}
function handleSubmit() {
  if (inputUrl.value.trim() === '') {
    alert('请输入url')
    return
  }
  if (inputTitle.value.trim() === '') {
    alert('请输入名称')
    return
  }
  if (inputIcon.value.trim() === '') {
    alert('请输入图标')
    return
  }

  emit('submit', {
    title: inputTitle.value,
    url: inputUrl.value,
    icon: inputIcon.value,
    id: uuid(),
    column: 1,
    row: 1,
    component: 'AppItemIcon',
  })
}

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

const inputFolderName = ref('')
function handleSubmitFolder() {
  if (inputFolderName.value.trim() === '') {
    alert('请输入名称')
    return
  }
  emit('submit', {
    id: uuid(),
    title: inputFolderName.value,
    column: 1,
    row: 1,
    component: 'AppFolder',
    apps: [],
  })
}
const inputPageName = ref('')
const inputPageIcon = ref('#icon-a-xiaolianbiaoqing')
const pageIcons = [
  '#icon-a-bizuigangabiaoqingxiaolian',
  '#icon-a-gangaliuhanbiaoqingxiaolian',
  '#icon-a-baochitaiduobiaoqingxiaolian',
  '#icon-a-keaiyouqudeganxingqubiaoqingxiaolian',
  '#icon-a-dakubeishangshangxinbiaoqingxiaolian',
  '#icon-a-bucuohaochiweidaobiaoqingxiaolian',
  '#icon-a-aixihuanliukoushuisebiaoqingxiaolian',
  '#icon-a-eabukenengbiaoqingxiaolian',
  '#icon-a-aimujingpeijingyangwasejingyabiaoqingxiaolian',
  '#icon-a-nulifendoujiayoubiaoqingxiaolian',
  '#icon-a-kuxiaobudegangaxingqiubiaoqing',
  '#icon-a-xiaolianbiaoqing',
  '#icon-a-gaoxinghaoxinqingbiaoqingxihuanbiaoqingxiaolian',
  '#icon-a-kuzhuangkushuaiqishuashuaibiaoqingxiaolian',
  '#icon-a-keshuishuijuebiaoqingxiaolian',
  '#icon-zhuangkeai',
  '#icon-a-shengqifennumaohuofenkaiqifenbiaoqingxiaolian',
  '#icon-a-jingyajingqiwasetianlabiaoqingxiaolian',
  '#icon-a-taibanglejingyabangbangdebiaoqingxiaolian',
  '#icon-a-aiqingxihuansebiaoqingxiaolian',
]
function handleSubmitPage() {
  if (inputPageName.value.trim() === '') {
    alert('请输入名称')
    return
  }
  if (inputPageIcon.value.trim() === '') {
    alert('请输入图标')
    return
  }
  emit('createPage', {
    id: uuid(),
    iconType: 'iconfont',
    title: inputPageName.value,
    icon: inputPageIcon.value,
    list: [],
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
      bottom-0
      bg="gray/60"
      w-120
      z-999999
      @click.stop="noop"
      @contextmenu.stop="noop"
    >
      <!-- 添加页面 -->
      <h3 text-left text-xl my-2 font-bold>
        添加分页
      </h3>
      <p text-left>
        名称
      </p>
      <input
        v-model="inputPageName"
        h-60px
        w-full
        my-2
        text-xl
        px-2
        rounded-xl
        bg="white/50"
        placeholder="请输入名称"
      >
      <div w-full flex flex-wrap>
        <!--  -->
        <div
          v-for="item in pageIcons" :key="item" p-2
          :class="{'bg-white': item === inputPageIcon}"
          rounded-xl
          @click="inputPageIcon=item"
        >
          <svg class="icon" text-3xl aria-hidden="true">
            <use :xlink:href="item" />
          </svg>
        </div>
      </div>
      <div w-full flex justify-end>
        <button btn m-2 @click="handleSubmitPage">
          添加分页
        </button>
      </div>
      <div h-0 w-full border-t border-dashed />
      <!-- 添加App图标 -->
      <h3 text-left text-xl my-2 font-bold>
        添加APP图标
      </h3>

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
      <div h-0 w-full border-t border-dashed />
      <h3 text-left text-xl my-2 font-bold>
        添加文件夹
      </h3>
      <!-- 名称 -->
      <p text-left>
        名称
      </p>
      <input
        v-model="inputFolderName"
        h-60px
        w-full
        my-2
        text-xl
        px-2
        rounded-xl
        bg="white/50"
        placeholder="请输入名称"
      >
      <div w-full flex justify-end>
        <button btn m-2 @click="handleSubmitFolder">
          确定
        </button>
      </div>
    </div>
  </div>
</template>
