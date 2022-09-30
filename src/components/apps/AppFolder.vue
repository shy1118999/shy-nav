<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-25 22:32:22
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 16:44:22
 * @Description:
-->
<script setup lang="ts">
import draggable from 'vuedraggable'
import apps from '~/storage/apps'
interface Props {
  id: string | number
  row: number
  column: number
  apps?: any
  title: string
}
const props = withDefaults(defineProps<Props>(), {
  id: 0,
  row: 1,
  column: 1,
  apps: [],
  title: '文件夹',
})
const folderSize = computed(() => {
  if (props.row === 2 && props.column === 2) return 'big'
  else if (props.row === 2) return 'middle'
  else return 'small'
})
function handleClick(item: any) {
  window.open(item.url, '_blank')
}
const emit = defineEmits(['update:title'])
const showAllApps = ref(false)
function noop(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
}
function handleClickMask(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  showAllApps.value = false
}
function handleShowAllApps(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  showAllApps.value = true
}

function handleEnterTitle(e: KeyboardEvent) {
  (e.target as HTMLInputElement).blur()
  const id = Number(props.id)
  let x = 0
  let y = 0
  for (let i = 0; i < apps.value.length; i++) {
    for (let j = 0; j < apps.value[i].list.length; j++) {
      if (apps.value[i].list[j].id == id) {
        x = i
        y = j
        break
      }
    }
  }
  apps.value[x].list[y].title = (e.target as HTMLInputElement).value
}
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
    @click.stop="handleShowAllApps"
  >
    <div v-if="folderSize == 'small'" data-shy-type="app-folder" :data-id="props.id" w-full h-full>
      <img src="../../asset/icon/folder.png" title="Folder" block object-cover w-full h-full>
    </div>
    <div
      v-else-if="folderSize == 'middle'"
      data-shy-type="app-folder"
      :data-id="props.id"
      w-full
      h-full
      p-0
      bg="white/50"
      flex
      flex-wrap
      items-start
      justify-start
      content-center
      overflow-auto
      class="app-folder-middle"
    >
      <!--  -->
      <img
        v-for="item in props.apps.slice(0, 2)"
        :key="item.id"
        class="app-item-middle-icon"
        :src="item.icon"
        :title="item.title"
        p-5px
        @click.stop="handleClick(item)"
      >
      <template v-if="props.apps.length >= 3">
        <!-- 这里需要显示一个 -->
        <div
          p-5px
          class="app-item-middle-icon"
        >
          <div w-full h-full relative>
            <div absolute top-0 left-0 w-full h-full scale="85" transform-origin="left-top" bg="#888/50" class="app-item-middle-icon-more" />
            <div absolute top-0 left-0 w-full h-full scale="85" transform-origin="center" bg="#ccc/80" class="app-item-middle-icon-more" />
            <img
              absolute top-0 left-0 w-full h-full scale="85" transform-origin="right-bottom"
              :src="props.apps[2].icon"
              :title="props.apps[2].title"
              class="app-item-middle-icon-more"
            >
          </div>
        </div>
      </template>
    </div>
    <div
      v-else
      data-shy-type="app-folder"
      :data-id="props.id"
      w-full
      h-full
      p-0
      bg="white/50"
      dark:bg="gray/30"
      flex
      flex-wrap
      items-start
      justify-start
      content-start
      overflow-auto
      class="app-folder-middle"
    >
      <img
        v-for="item in props.apps.slice(0, 8)"
        :key="item.id"
        class="app-item-middle-icon"
        :src="item.icon"
        :title="item.title"
        p-5px
        @click.stop="handleClick(item)"
      >
      <template v-if="props.apps.length >= 9">
        <div
          p-5px
          class="app-item-middle-icon"
        >
          <div w-full h-full relative>
            <div absolute top-0 left-0 w-full h-full scale="80" transform-origin="left-top" bg="#888/50" class="app-item-middle-icon-more" />
            <div absolute top-0 left-0 w-full h-full scale="80" transform-origin="center" bg="#ccc/80" class="app-item-middle-icon-more" />
            <img
              absolute top-0 left-0 w-full h-full scale="80" transform-origin="right-bottom"
              :src="props.apps[8].icon"
              :title="props.apps[8].title"
              class="app-item-middle-icon-more"
            >
          </div>
        </div>
      </template>
    </div>
    <Teleport to="body">
      <Transition name="nested">
        <template v-if="showAllApps">
          <div
            fixed
            top-0
            bottom-0
            left-0
            right-0
            bg="gray/30"
            backdrop-blur-sm
            z-99999
            pt-50
            @click.stop="handleClickMask"
            @contextmenu.stop="handleClickMask"
          >
            <div w-full>
              <!-- title -->
              <h3 color-white text-center text-3xl leading="2em" m-10>
                <input :value="props.title" text-center bg="transparent" rounded-3xl focus:bg="white/50" @click.stop="" @keyup.enter="handleEnterTitle">
              </h3>
              <!-- apps -->
              <div max-w="80%" min-h-200px bg="white/30" p-10 rounded-3xl m-auto flex flex-wrap items-center justify-center @click.stop="" @contextmenu.stop="">
                <draggable
                  :list="props.apps"
                  item-key="id"
                  group="apps"
                  :delay="50"
                  :touch-start-threshold="5"
                  animation="300"
                >
                  <template #item="{ element }">
                    <div
                      class="app-item swiper-no-swiping"
                      :style="{
                        '--cell-column': 1,
                        '--cell-row': 1,
                      }"
                      :data-item="element.id"
                    >
                      <!-- 实际组件 -->
                      <component
                        :is="element.component"
                        data-shy-type="app-item"
                        :data-id="element.id"
                        :data-url="element.url"
                        v-bind="element"
                      />
                      <!-- 标题 -->
                      <div class="app-item-title" truncate>
                        {{ element.title }}
                      </div>
                    </div>
                  </template>
                </draggable>
              </div>
            </div>
          </div>
        </template>
      </Transition>
    </Teleport>
  </div>
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
  transform: scale(0.5);
  opacity: 0;
}
.app-item-icon {
  border-radius: var(--icon-radius);
  transition: all 0.2s;
}
.app-folder-middle::-webkit-scrollbar {
  display: none;
}
.app-folder-middle {
  padding: calc(
      (
          var(--icon-size) * var(--cell-column) + var(--icon-gap-x) *
            var(--cell-column) - var(--icon-gap-x) -
            calc(
              (
                  var(--icon-size) * var(--cell-row) + var(--icon-gap-y) *
                    var(--cell-row) - var(--icon-gap-y)
                ) / 3
            ) * 3
        ) / 2
    )
    0;
}
.app-item-middle-icon {
  width: calc(
    (
        var(--icon-size) * var(--cell-row) + var(--icon-gap-y) * var(--cell-row) -
          var(--icon-gap-y)
      ) / 3
  );
  height: calc(
    (
        var(--icon-size) * var(--cell-row) + var(--icon-gap-y) * var(--cell-row) -
          var(--icon-gap-y)
      ) / 3
  );
  border-radius: var(--icon-radius);
}
.app-item-middle-icon-more {
  border-radius: calc(var(--icon-radius) * 0.8);
}

.app-item {
  width: calc(
    var(--icon-size) * var(--cell-row) + var(--icon-gap-y) * var(--cell-row)
  );
  height: calc(
    var(--icon-size) * var(--cell-column) + var(--icon-gap-x) *
      var(--cell-column)
  );

  border-radius: var(--icon-radius);
  padding: 0 calc(var(--icon-gap-y) / 2) calc(var(--icon-gap-x));
}
.app-item-title {
  color: var(--icon-name-color);
  padding: 3px 0;
  display: var(--icon-name-display);
  text-align: center;
  /* line-height: calc(2 * var(--icon-gap-y)); */
}
.app-item-icon:hover{
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
.dark .app-item-icon:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

</style>
