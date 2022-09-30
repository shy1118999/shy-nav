<!--
 * @Author: shaohang-shy
 * @Date: 2022-04-11 20:30:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:56:07
 * @Description:
-->
<script setup lang="ts">
import axios from 'axios'
const _today = new Date()
const month = `${_today.getMonth() + 1}`.padStart(2, '0')
const day = `${_today.getDate()}`.padStart(2, '0')

interface HistoryTodayItem {
  cover: boolean
  desc: string
  festival: string
  link: string
  recommend: boolean
  title: string
  type: string
  year: string
}

type HistoryToday = Record<string, HistoryTodayItem[]>

const list = ref<HistoryTodayItem[]>([])
getHisToday(month, day)
function getHisToday(month: string, day: string) {
  const today_list = localStorage.getItem(`shy-nav-his_${month}`)
  if (today_list) {
    list.value = JSON.parse(today_list)[`${month}${day}`]
    return
  }
  axios
    .get(`https://baike.baidu.com/cms/home/eventsOnHistory/${month}.json`)
    .then((res) => {
      const data = res.data
      formatData(data[month])
    })
}
function formatData(data: HistoryToday) {
  list.value = data[`${month}${day}`]
  localStorage.setItem(`shy-nav-his_${month}`, JSON.stringify(data))
}
</script>

<template>
  <ul id="list" class="container" text-54px>
    <li v-for="(item, index) in list" :key="index">
      <p color="#909399">
        {{ item.year }}
      </p>
      <div class="content">
        <p v-html="item.title" />
        <p v-html="item.desc" />
      </div>
    </li>
  </ul>
</template>

<style scoped>
html,
body {
    background-color: #ffffff;
}

.container {
    padding: .666667rem;
}

h2 {
    text-align: center;
    margin: 0;
    margin-bottom: .666667rem;
    font-family: cursive;
    font-size: .96rem;
}

h2 em {
    color: teal;
    font-size: .96rem;
    margin: 0 .266667rem;
}

.inner {
    font-size: .426667rem;
    color: #303133;
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
}

.item {
    padding-left: 1rem;
    padding-bottom: .4rem;
    position: relative;
    z-index: 1
}

.item p {
    color: #909399;
    font-size: .48rem;
    line-height: .48rem;
    margin: 0;
    margin-bottom: .4rem;
}

.item::before {
    content: "";
    background-color: #d3d3d3;
    position: absolute;
    width: .32rem;
    height: .32rem;
    border-radius: 50%;
    left: 0;
    top: .04rem;
}

.item:nth-child(2n+1)::before {
    background: teal;
}

.item::after {
    content: "";
    width: .026667rem;
    height: 100%;
    background: #e4e7ed;
    position: absolute;
    left: .146667rem;
    top: 0;
    z-index: -1;
}

.item:last-child::after {
    display: none;
}

.item a {
    color: unset;
    text-decoration: none;
}

html[theme="dark"],
html[theme="dark"] body {
    background-color: rgb(47 52 55);
    color: #ffffff;
}

html[theme="dark"] .inner {
    color: #ffffff;
}

[v-cloak] {
    display: none;
}
</style>
