<!--
 * @Author: shaohang-shy
 * @Date: 2022-04-07 21:22:34
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:47:30
 * @Description:
-->
<script setup lang="ts">
import { useTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional for styling

const sentence = ref('点击复制，右键切换。')
const from = ref('')
const fromWho = ref('')

const tippy = ref<HTMLDivElement>()
const { hide, show } = useTippy(tippy, {
  content: '复制成功',
  arrow: false,
  // trigger: 'click',
  trigger: 'manual',
})

fetch('https://v1.hitokoto.cn/?c=d&c=i&encode=json&lang=cn')
  .then(res => res.json())
  .then((res) => {
    sentence.value = res.hitokoto
    from.value = res.from
    fromWho.value = res.from_who
  })
const source = computed(() => {
  return `${sentence.value}\n--${from.value}${fromWho.value ? `-${fromWho.value}` : ''}`
})
const { copy } = useClipboard({ source })

function copyThis() {
  copy()
  show()
  setTimeout(() => {
    hide()
  }, 1000)
}
function getNew(e: Event | undefined) {
  e?.preventDefault()
  e?.stopPropagation()
  fetch('https://v1.hitokoto.cn/?c=d&c=i&encode=json&lang=cn')
    .then(res => res.json())
    .then((res) => {
      sentence.value = res.hitokoto
      from.value = res.from
      fromWho.value = res.from_who
    })
}
getNew(undefined)
</script>

<template>
  <div flex w-full justify-center>
    <div
      ref="tippy"
      color="white/60"
      text-sm
      cursor-pointer
      relative
      class="sentence"
      @click.stop="() => { copyThis(); }"
      @contextmenu.stop="getNew"
    >
      <div title="点击左键复制，右键切换">
        「 {{ sentence }} 」
      </div>
      <div class="from">
        --{{ from }}{{ fromWho ? `-${fromWho}` : '' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.from {
    opacity: 0;
    transition: all 0.5s ease;
}
.sentence:hover .from {
    opacity: 1;
}
</style>
