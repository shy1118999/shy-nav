<!--
 * @Author: shaohang-shy
 * @Date: 2022-04-07 21:22:34
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-04-07 21:54:05
 * @Description:
-->
<script setup lang="ts">
const sentence = ref('')
const from = ref('')
const fromWho = ref('')
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
const { copy, copied } = useClipboard({ source })

function copyThis() {
  copy()
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
      color="white/60"
      text-sm
      cursor-pointer
      relative
      pb-4
      class="sentence"
      @click.stop="copyThis"
      @contextmenu.stop="getNew"
    >
      <div title="点击左键复制，右键切换">
        「 {{ sentence }} 」
      </div>
      <div class="from">
        --{{ from }}{{ fromWho ? `-${fromWho}` : '' }}
      </div>
      <div :style="{ opacity: copied ? 1 : 0 }" color="green/50" class="copied-text" absolute>
        已复制
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
.copied-text {
    transition: all 0.3s ease;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}
</style>
