<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-22 23:02:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-04-05 14:33:33
 * @Description:
-->
<script setup lang="ts">
import draggable from 'vuedraggable'
import tabApps from '~/storage/tabApps'
</script>
<template>
  <div flex items-center justify-center p-10px>
    <draggable
      :list="tabApps"
      tag="transition-group"
      item-key="id"
      force-fallback="true"
      group="tab"
      :delay="50"
      :touch-start-threshold="5"
      animation="300"
    >
      <template #item="{ element }">
        <div
          data-shy-type="tab-item"
          :data-id="element.id"
          :data-url="element.url"
          relative
          :data-item="element.id"
          w-80px
          h-80px
          m-10px
          class="app-item"
        >
          <!-- 实际组件 -->
          <component :is="element.component" v-bind="element" />
          <!-- 标题 -->
          <div class="app-item-title" truncate>
            {{ element.title }}
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.app-item {
  width: calc(
    var(--icon-size) + var(--icon-gap-y)
  );
  height: calc(
    var(--icon-size) + var(--icon-gap-x)
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
