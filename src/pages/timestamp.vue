<!--
 * @Author: shaohang-shy
 * @Date: 2022-05-27 13:39:04
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:55:10
 * @Description: timestamp
-->
<!-- https://shy-nav.shaohang.xin/nav-icons/timestamp.svg -->
<script setup lang="ts">
import dayjs from 'dayjs'
// 在编程语言中获取Unix时间戳：
const list = [
  {
    lang: 'JavaScript',
    second: 'Math.round(new Date() / 1000)',
    millisecond: 'new Date().getTime()',
  },
  {
    lang: 'Java',
    second: 'System.currentTimeMillis() / 1000',
    millisecond: 'System.currentTimeMillis()',
  },
  {
    lang: 'Python',
    second: 'int(time.time())',
    millisecond: 'int(time.time() * 1000)',
  },
  {
    lang: 'Go',
    second: 'time.Now().Unix()',
    millisecond: 'time.Now().UnixNano() / 1000000',
  },
  {
    lang: 'PHP',
    second: 'time()',
    millisecond: '(int)(microtime(true) * 1000)',
  },
  {
    lang: 'Ruby',
    second: 'Time.now.to_i',
    millisecond: '(Time.now.to_f * 1000).to_i',
  },
  {
    lang: 'C#',
    second: 'DateTimeOffset.UtcNow.ToUnixTimeSeconds()',
    millisecond: 'DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()',
  },
  {
    lang: 'Swift',
    second: 'NSDate().timeIntervalSince1970',
    millisecond: 'NSDate().timeIntervalSince1970 * 1000',
  },
  {
    lang: 'Objective-C',
    second: '[[NSDate date] timeIntervalSince1970]',
    millisecond: '[[NSDate date] timeIntervalSince1970] * 1000',
  },
]

const dateFormat = 'YYYY-MM-DD HH:mm:ss'

const timeNowTimestamp = ref(new Date().getTime())

const timeNow = computed(() => {
  return dayjs(timeNowTimestamp.value).format(dateFormat)
})

function updateTimeNow() {
  timeNowTimestamp.value = (new Date()).getTime()
}

let handle: NodeJS.Timer | null = setInterval(updateTimeNow, 100)
function handleStart() {
  if (!handle)
    handle = setInterval(updateTimeNow, 100)
}

function handleStop() {
  if (handle) {
    clearInterval(handle)
    handle = null
  }
}

const nowBase = ref(1000)

function handleChangeNowType(e: Event) {
  nowBase.value = (e.target as HTMLSelectElement).value === 's' ? 1000 : 1
}

const unixBase = ref(1000)
const inputTimestamp = ref('')
const outputTimestamp = computed(() => {
  return dayjs(parseInt(inputTimestamp.value) * unixBase.value).format(dateFormat)
})

function handleChangeUnixType(e: Event) {
  unixBase.value = (e.target as HTMLSelectElement).value === 's' ? 1000 : 1
}

const inputDate = ref('')
const dateBase = ref(1000)
const outputDate = computed(() => {
  if (dateBase.value === 1000)
    return dayjs(inputDate.value).unix()
  return dayjs(inputDate.value).valueOf()
})
function handleChangeDateType(e: Event) {
  dateBase.value = (e.target as HTMLSelectElement).value === 's' ? 1000 : 1
}
</script>

<template>
  <div class="min-w-1200px p-20 m-auto">
    <h1 text-2xl text-left>
      Unix时间戳
    </h1>
    <div class="flex mt-5" children:rounded-none>
      <span bg="white/50" dark:bg="white/30" px-16px py-8px>当前时间</span>
      <input :value="(timeNowTimestamp / nowBase).toFixed()" font-mono>
      <select px-2 bg="white/50" dark:bg="white/30" @change="handleChangeNowType">
        <option value="s">
          秒
        </option>
        <option value="ms">
          毫秒
        </option>
      </select>
      <input v-model="timeNow" font-mono>
      <button class="btn" @click="handleStart">
        开始
      </button>
      <button class="btn" @click="handleStop">
        停止
      </button>
      <button class="btn" @click="updateTimeNow">
        刷新
      </button>
    </div>
    <div class="flex mt-5" children:rounded-none>
      <span bg="white/50" dark:bg="white/30" px-16px py-8px>Unix时间戳</span>
      <input v-model="inputTimestamp" font-mono onpaste="setTimeout(timeToDate,1)">
      <select px-2 bg="white/50" dark:bg="white/30" @change="handleChangeUnixType">
        <option value="s">
          秒
        </option>
        <option value="ms">
          毫秒
        </option>
      </select>
      <input v-model="outputTimestamp">
    </div>
    <div class="flex mt-5" children:rounded-none>
      <span bg="white/50" dark:bg="white/30" px-16px py-8px>北京时间</span>
      <input v-model="inputDate" font-mono>
      <div h-full w-1 w-0 />
      <input v-model="outputDate" font-mono>
      <select px-2 bg="white/50" dark:bg="white/30" @change="handleChangeDateType">
        <option value="s">
          秒
        </option>
        <option value="ms">
          毫秒
        </option>
      </select>
    </div>
    <h3 class="mt-5" text-left>
      在编程语言中获取Unix时间戳：
    </h3>
    <div backdrop-blur-xl bg="white/20" p-10 mt-5>
      <table w-full leading-loose>
        <thead>
          <tr>
            <th text-left>
              语言
            </th>
            <th text-left>
              秒
            </th>
            <th text-left>
              毫秒
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.lang">
            <td text-left>
              {{ item.lang }}
            </td>
            <td text-left>
              <code>{{ item.second }}</code>
            </td>
            <td text-left>
              <code>{{ item.millisecond }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
input {
  padding: 0 10px;
}

.dark input {
  background: rgba(255, 255, 255, 0.5);
}
</style>
