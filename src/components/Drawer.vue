<!--
 * @Author: shaohang-shy
 * @Date: 2022-07-16 17:15:48
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-07-16 17:19:34
 * @Description: Drawer
-->
<script setup lang="ts">
const emit = defineEmits(['close'])
const props = withDefaults(defineProps<{
  show: boolean
}>(), {})
function handleClickMask(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  emit('close')
}
function noop(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
}
</script>
<template>
  <Transition :duration="550" name="nested">
    <div
      v-if="props.show"
      fixed top-0 bottom-0 left-0 right-0 bg="gray/30" backdrop-blur-sm z-99999
      @click.stop="handleClickMask"
      @contextmenu.stop="handleClickMask"
    >
      <div
        absolute right-0 top-0 overflow-auto p-5 bottom-0 bg="gray/60" w-120 z-999999 @click.stop="noop"
        @contextmenu.stop="noop"
      >
        <slot />
      </div>
    </div>
  </Transition>
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
