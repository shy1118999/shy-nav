<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-20 14:31:34
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-25 22:48:06
 * @Description: Apps
-->
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperController } from 'swiper'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import draggable from 'vuedraggable'
import apps from '~/storage/apps'
import activeIndex from '~/storage/swiperActiveIndex'

const swiperController = ref<SwiperController>()

const handleToPage = (id: number) => {
  swiperController.value?.slideTo(apps.value.findIndex(x => x.id === id) ?? 0, 500)
}

const showAppsMenu = ref(false)

</script>

<template>
  <swiper
    :pagination="true"
    flex-1
    w-full
    :initial-slide="activeIndex"
    :modules="[Pagination]"
    @swiper="x => swiperController = x"
    @slideChange="e => activeIndex = e.activeIndex"
  >
    <swiper-slide v-for="item in apps" :key="item.id" overflow-auto>
      <div
        class="app-grid"
        absolute
        max-w-1200px
        mx-auto
        grid
        relative
        justify-center
        grid-flow-row-dense
        pb-100px
      >
        <draggable
          :list="item.list"
          tag="transition-group"
          item-key="id"
          group="apps"
          :delay="50"
          :touch-start-threshold="5"
          animation="300"
        >
          <template #item="{ element }">
            <div

              relative
              :data-item="element.id"
              class="app-item swiper-no-swiping"
              :style="{
                '--cell-column': element.column,
                '--cell-row': element.row,
              }"
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
    </swiper-slide>
  </swiper>
  <transition name="fade">
    <div
      v-show="showAppsMenu"
      fixed
      left-0
      bottom-0
      w-full
      h-100px
      bg-gray-100
      bg-opacity-30
      rounded-t-xl
      flex
      items-center
      justify-center
      z-99999
    >
      <div
        v-for="item in apps"
        :key="item.id"
        cursor-pointer
        w-6em
        h="80%"
        flex="~"
        flex-col
        items-center
        justify-around
        box-border
        hover:bg-white
        hover:opacity-80
        hover:rounded-xl
        hover:box-border
        color="#666666"
        mx-2
        :title="item.name"
        @click.stop="handleToPage(item.id)"
      >
        <svg class="icon" text-3xl aria-hidden="true">
          <use :xlink:href="item.icon" />
        </svg>
        <p w-full truncate>
          {{ item.name }}
        </p>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.5s;
}
.app-grid {
  grid-template-columns: repeat(
    auto-fill,
    calc(var(--icon-size) + var(--icon-gap-y))
  );
  grid-template-rows: repeat(
    auto-fill,
    calc(var(--icon-size) + var(--icon-gap-x))
  );
}
.app-item {
  grid-column: span var(--cell-row);
  grid-row: span var(--cell-column);
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
  /* line-height: calc(2 * var(--icon-gap-y)); */
}
</style>
