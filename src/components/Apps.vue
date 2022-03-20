<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-20 14:31:34
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-20 14:42:11
 * @Description: Apps
-->
<script lang="ts" setup>

import draggable from 'vuedraggable'

const appList = ref([
  { id: 1, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/taobao.svg' }, title: '淘宝' },
  { id: 2, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/jd.svg' }, title: '京东' },
  { id: 3, column: 2, row: 2, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/tmall.svg' }, title: '天猫' },
  { id: 4, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/douyu.svg' }, title: '斗鱼' },
  { id: 5, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/ithome.svg' }, title: 'IT之家' },
  { id: 6, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/iqiyi.svg' }, title: '爱奇艺' },
  { id: 7, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/youku.svg' }, title: '优酷' },
  { id: 8, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/weibo.svg' }, title: '新浪微博' },
  { id: 9, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/zhihu.svg' }, title: '知乎' },
  { id: 10, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/qqmusic.svg' }, title: 'QQ音乐' },
  { id: 11, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/12306.svg' }, title: '12306' },
  { id: 12, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/bilibili.svg' }, title: '哔哩哔哩弹幕网' },
  { id: 13, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/music163.svg' }, title: '网易云音乐' },
  { id: 14, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/douban.svg' }, title: '豆瓣' },
  { id: 15, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5ddb94f43c4366058063c8ed.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: '码云Gitee' },
  { id: 16, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/595a178e703e23483da878a4.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: '掘金' },
  { id: 17, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5e017f893c4366058063ca08.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: 'Stack Overflow' },
  { id: 18, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5ca4655c81def7042f75ad8b.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: '力扣' },
  { id: 19, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/595a178e703e23483da8717c.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: 'GitHub' },
  { id: 20, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/595a178e703e23483da874f3.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: 'CSDN' },
  { id: 21, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5c887d0a81def7042f75ad22.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: 'Electron' },
  { id: 22, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5fec316e8af9860fb41a9ca4.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: 'React' },
  { id: 23, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5c2052f3bff15474e7a4753e.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: 'Vue' },
  { id: 24, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5ae2c0a8eefad85931bfa632.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: 'Nust.js' },
  { id: 25, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5def63073c4366058063c999.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: '兔二工具' },
  { id: 26, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://jd.com', icon: 'https://files.codelife.cc/website/5dad61e86286ed4818112bb3.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100' }, title: 'uniapp' },
])
</script>

<template>
  <div class="app-grid" max-w-1200px mx-auto grid relative justify-center grid-flow-row-dense>
    <draggable
      v-model="appList"
      tag="transition-group"
      item-key="id"
      force-fallback="true"
      group="people"
      :delay="50"
      :touch-start-threshold="5"
      animation="300"
    >
      <template #item="{ element }">
        <div
          :data-item="element.id"
          class="app-item"
          :style="{
            '--cell-column': element.column,
            '--cell-row': element.row,
          }"
        >
          <!-- 实际组件 -->
          <component :is="element.component" v-bind="element.props" />
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
    grid-column: span var(--cell-column);
    grid-row: span var(--cell-row);
    width: calc(
        var(--icon-size) * var(--cell-row) + var(--icon-gap-y) * var(--cell-row)
    );
    height: calc(
        var(--icon-size) * var(--cell-column) + var(--icon-gap-x) * var(--cell-column)
    );

    border-radius: var(--icon-radius);
    padding: 0 calc(var(--icon-gap-y) / 2) calc(var(--icon-gap-x));
}
.app-item-title {
    color: var(--icon-name-color);
    line-height: calc(2 * var(--icon-gap-y));
}
</style>
