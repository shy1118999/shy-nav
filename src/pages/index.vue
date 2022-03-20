<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-16 22:21:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-20 14:19:26
 * @Description:index
-->
<script setup lang="ts">
import draggable from 'vuedraggable'
const now = useNow()
const week = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}
const weekZh = {
  0: '星期日',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
}
const searchValue = ref('')
function search() {
  window.open(`https://www.baidu.com/s?wd=${searchValue.value}`, '_blank')
}

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
const defaultSize = 70
const iconSize = 60
const iconGapX = 35
const iconGapY = 20
const iconRadius = 10
const iconNameSize = 14
const iconNameColor = 'rgba(255,255,255,0.6)'
const varStyle = {
  '--icon-size': `${iconSize}px`,
  '--icon-gap-x': `${iconGapX}px`,
  '--icon-gap-y': `${iconGapY}px`,
  '--icon-radius': `${iconRadius}px`,
  '--icon-name-size': `${iconNameSize}px`,
  '--icon-name-color': iconNameColor,
}
</script>

<template>
  <div w-full :style="varStyle">
    <!-- 时间 -->
    <div
      flex="~"
      justify-center
      text-7xl
      font-mono
    >
      {{ now.getHours().toString().padStart(2, '0') }}:{{ now.getMinutes().toString().padStart(2, '0') }}:{{ now.getSeconds().toString().padStart(2, '0') }}
    </div>
    <div
      flex="~"
      justify-center
      text-xl
      font-mono
      dark-50
    >
      {{ now.getFullYear() }}年{{ now.getMonth() + 1 }}月{{ now.getDate() }}日 {{ weekZh[now.getDay()] }}
    </div>
    <!-- 搜索 -->
    <div
      flex="~"
      justify-center
      items-center
      md:mx-20
      lg:mx-30
      xl:mx-100
      my-10
      rounded-50
      h-15
      overflow-hidden
      bg-white
      bg-opacity-10
      backdrop-blur-md
    >
      <div i-carbon:search text-xl ml-5 />
      <input
        v-model="searchValue"
        placeholder="Enter your search content..."
        type="text"
        flex-1
        p-5
        focus:outline-none
        bg="transparent"
        @keydown.enter="search"
      >
      <button btn focus:outline-none px-10 flex-2 h-full @click="search">
        Search
      </button>
    </div>
    <!-- items -->
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
    var(--icon-size) * var(--cell-column) + var(--icon-gap-x) *
      var(--cell-column)
  );

  border-radius: var(--icon-radius);
  padding: 0 calc(var(--icon-gap-y) / 2) calc(var(--icon-gap-x));
}
.app-item-title {
  color: var(--icon-name-color);
}
</style>
