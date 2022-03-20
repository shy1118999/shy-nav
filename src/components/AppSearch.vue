<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-20 14:29:50
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-20 19:30:34
 * @Description: AppSearch
-->
<script lang="ts" setup>
const searchValue = ref('')
const searchInput = ref<HTMLInputElement>()
const searchEngine = [
  {
    name: 'Google',
    url: 'https://www.google.com/search?q={$1}',
    icon: '#icon-google',
  },
  {
    name: 'Baidu',
    url: 'https://www.baidu.com/s?wd={$1}',
    icon: '#icon-baidu',
  },
  {
    name: 'Bing',
    url: 'https://cn.bing.com/search?q={$1}',
    icon: '#icon-biying',
  },
  {
    name: '知乎',
    url: 'https://www.zhihu.com/search?type=content&q={$1}',
    icon: '#icon-zhihu',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/search?q={$1}',
    icon: '#icon-GitHub',
  },
  {
    name: '哔哩哔哩',
    url: 'https://search.bilibili.com/all?keyword={$1}',
    icon: '#icon-bilibili',
  },
]
const currentSearchEngine = ref(searchEngine[0])
const showMoreSearchEngine = ref(false)

function handleClick(e: MouseEvent) {
  showMoreSearchEngine.value = false
}
watchEffect(() => {
  if (showMoreSearchEngine.value) {
    setTimeout(() => {
      window.addEventListener('click', handleClick)
    })
  }
  else { window.removeEventListener('click', handleClick) }
})
function search() {
  window.open(currentSearchEngine.value.url.replace(
    '{$1}',
    searchValue.value,
  ), '_blank')
}
</script>
<template>
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
    bg-white
    bg-opacity-10
    backdrop-blur-md
    relative
    z-99
  >
    <div
      flex="~"
      cursor-pointer
      justify-center
      items-center
      bg-white
      bg-opacity-40
      h-full
      px-1em
      rounded-l-50
      relative
      @click="showMoreSearchEngine = !showMoreSearchEngine"
    >
      <!-- 当前的导航方式 -->
      <svg class="icon" text-3xl aria-hidden="true">
        <use :xlink:href="currentSearchEngine.icon" />
      </svg>
      <!-- 下拉箭头 -->
      <div v-if="!showMoreSearchEngine" i-carbon:caret-down text-xl ml-1 />
      <div v-else i-carbon:caret-up text-xl ml-1 />
    </div>
    <transition name="bounce">
      <div
        v-show="showMoreSearchEngine"
        absolute
        w-full
        h="150/100"
        top="120/100"
        left-0
        rounded-xl
        p-x-2em
        flex
        items-center
        bg-white
        bg-opacity-70
        backdrop-blur-md
        z-99999
      >
        <div
          v-for="(item, index) in searchEngine"
          :key="index"
          cursor-pointer
          w-5em
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
          @click.stop="(e) => {
            currentSearchEngine = item
            showMoreSearchEngine = false
            searchInput?.focus()
          }"
        >
          <svg class="icon" text-3xl aria-hidden="true">
            <use :xlink:href="item.icon" />
          </svg>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </transition>
    <input
      ref="searchInput"
      v-model="searchValue"
      autofocus
      placeholder="Enter your search content..."
      type="text"
      flex-1
      p-5
      focus:outline-none
      bg="transparent"
      @keydown.enter="search"
    >
    <button btn focus:outline-none px-10 rounded-50 h-full @click="search">
      Search
    </button>
  </div>
</template>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
