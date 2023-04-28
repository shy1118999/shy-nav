<!--
 * @Author: shaohang-shy
 * @Date: 2022-05-27 13:39:04
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-04-28 11:13:11
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

const dateFormat = ref('YYYY-MM-DD HH:mm:ss')

const timeNowTimestamp = ref(new Date().getTime())

const timeNow = computed(() => {
  return dayjs(timeNowTimestamp.value).format(dateFormat.value)
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

interface DateItem {
  base: number
  date: string | undefined
}

const dateList = ref<DateItem[]>([{
  base: 1000,
  date: undefined,
}, {
  base: 1000,
  date: undefined,
}])

const computedDateList = computed(() => {
  return dateList.value.map(item => item.date ? (item.base === 1000 ? dayjs(item.date).unix() : dayjs(item.date).valueOf()) : undefined)
})

function handleAddDateRow() {
  dateList.value.push({
    base: 1000,
    date: undefined,
  })
}

function handleDeleteDateRow(idx: number) {
  dateList.value.splice(idx, 1)
}

interface UnixItem {
  base: number
  timestamp: number | undefined
}
const unixList = ref<UnixItem[]>([{
  base: 1000,
  timestamp: undefined,
}, {
  base: 1000,
  timestamp: undefined,
}])

const computedUnixList = computed(() => {
  return unixList.value.map(item => item.timestamp ? dayjs(item.timestamp * item.base).format(dateFormat.value) : undefined)
})

function handleAddUnixRow() {
  unixList.value.push({
    base: 1000,
    timestamp: undefined,
  })
}

function handleDeleteUnixRow(idx: number) {
  unixList.value.splice(idx, 1)
}

</script>

<template>
  <div class="min-w-1200px p-20 m-auto">
    <h1 text-2xl text-left>
      Unix时间戳
    </h1>
    <div class="flex mt-5" children:rounded-none>
      <span bg="white/50" dark:bg="white/30" px-16px py-8px>时间格式</span>
      <input v-model="dateFormat" font-mono>
      <button class="btn" @click="dateFormat = 'YYYY-MM-DD HH:mm:ss'">
        恢复默认
      </button>
    </div>
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
    <div v-for="item, idx in unixList" :key="idx" class="flex mt-5" children:rounded-none>
      <span bg="white/50" dark:bg="white/30" px-16px py-8px>Unix时间戳</span>
      <input v-model="item.timestamp" font-mono>
      <select px-2 bg="white/50" dark:bg="white/30" @change="(e) => item.base = e.target.value === 's' ? 1000 : 1">
        <option value="s">
          秒
        </option>
        <option value="ms">
          毫秒
        </option>
      </select>
      <input :value="computedUnixList[idx]">
      <button class="btn" @click="handleDeleteUnixRow(idx)">
        删除本行
      </button>
    </div>
    <div class="flex mt-5" children:rounded-none>
      <button class="btn" @click="handleAddUnixRow">
        增加一行
      </button>
    </div>
    <div v-for="item, idx in dateList" :key="idx" class="flex mt-5" children:rounded-none>
      <span bg="white/50" dark:bg="white/30" px-16px py-8px>北京时间</span>
      <input v-model="item.date" font-mono>
      <div h-full w-1 w-0 />
      <input :value="computedDateList[idx]" font-mono>
      <select px-2 bg="white/50" dark:bg="white/30" @change="(e) => item.base = e.target.value === 's' ? 1000 : 1">
        <option value="s">
          秒
        </option>
        <option value="ms">
          毫秒
        </option>
      </select>
      <button class="btn" @click="handleDeleteDateRow(idx)">
        删除本行
      </button>
    </div>
    <div class="flex mt-5" children:rounded-none>
      <button class="btn" @click="handleAddDateRow">
        增加一行
      </button>
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
