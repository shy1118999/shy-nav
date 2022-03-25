<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-25 22:32:22
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-25 23:34:11
 * @Description:
-->
<script setup lang="ts">
interface Props {
  row: number
  column: number
  apps?: any
}
const props = withDefaults(defineProps<Props>(), {
  row: 1,
  column: 1,
  apps: [],
})
const folderSize = computed(() => {
  if (props.row === 4) return 'big'
  else if (props.row === 2) return 'middle'
  else return 'small'
})
function handleClick(item: any) {
  window.open(item.url, '_blank')
}
const emits = defineEmits(['more'])
</script>
<template>
  <div

    relative
    overflow-hidden
    w-full
    h-full
    flex
    flex-col
    items-center
    justify-center
    cursor-pointer
    class="app-item-icon"
  >
    <div
      v-if="folderSize == 'small'"
      data-shy-type="app-folder"
      w-full
      h-full
    >
      <img src="../../asset/icon/folder.png" title="Folder" block object-cover w-full h-full>
    </div>
    <div
      v-else-if="folderSize == 'middle'"
      data-shy-type="app-folder"
      w-full
      h-full
      p-0
      bg="white/50"
      flex
      flex-wrap
      items-start
      justify-start
      content-start
      class="app-folder-middle"
    >
      <!--  -->
      <img
        v-for="item in props.apps"
        :key="item.id"
        class="app-item-middle-icon"
        :src="item.icon"
        :title="item.title"
        p-5px
        @click="handleClick(item)"
      >
    </div>
    <template v-else>
      <!--  -->
    </template>
  </div>
</template>
<style scoped>
.app-item-icon {
    border-radius: var(--icon-radius);
}
.app-folder-middle {
    padding: calc(
            (
                    var(--icon-size) * var(--cell-column) + var(--icon-gap-x) *
                        var(--cell-column) - var(--icon-gap-x) -
                        calc(
                            (
                                    var(--icon-size) * var(--cell-row) +
                                        var(--icon-gap-y) * var(--cell-row) -
                                        var(--icon-gap-y)
                                ) / 3
                        ) * 3
                ) / 2
        )
        0;
}
.app-item-middle-icon {
    width: calc(
        (
                var(--icon-size) * var(--cell-row) + var(--icon-gap-y) *
                    var(--cell-row) - var(--icon-gap-y)
            ) / 3
    );
    height: calc(
        (
                var(--icon-size) * var(--cell-row) + var(--icon-gap-y) *
                    var(--cell-row) - var(--icon-gap-y)
            ) / 3
    );
    border-radius: var(--icon-radius);
}
</style>
