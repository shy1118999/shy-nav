<!--
 * @Author: shaohang-shy
 * @Date: 2022-07-23 09:59:56
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-07-23 10:57:33
 * @Description: Checkbox
-->
<script setup lang="ts">

const props = withDefaults(defineProps<{
  checked: boolean
  color?: string
}>(), {
  color: '#0084ff',
})
const emit = defineEmits(['change'])
</script>
<template>
  <svg
    class="icon" w-5 h-5 m-1 aria-hidden="true"
    :style="{ fill: props.color }"
    hover:shadow-md cursor-pointer
    transition-all
    @click="emit('change')"
  >
    <transition name="nested">
      <use v-if="props.checked" xlink:href="#icon-checkbox-checked" />
      <use v-else xlink:href="#icon-checkbox-unchecked" />
    </transition>

  </svg>
</template>
<style scoped>

.nested-enter-active,
.nested-leave-active {
  transition: all 0.1s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0;
}

.nested-enter-from,
.nested-leave-to {
  transform-origin: center;
  transform: scale(0.1);
  opacity: 0;
}
</style>
