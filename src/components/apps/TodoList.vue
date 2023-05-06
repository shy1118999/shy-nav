<!--
 * @Author: shaohang-shy
 * @Date: 2022-07-22 16:45:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-05-06 09:59:43
 * @Description: TodoList
-->
<script setup lang="ts">
import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'
import list from '~/storage/todoList'
import todoTypes from '~/storage/todoType'

interface Props {
  id?: string | number
  row?: number
  column?: number
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 0,
  row: 1,
  column: 1,
  title: '待办事项',
})

const todoTitleInputRef = ref<HTMLInputElement>()

const typeTypeColorMap = computed(() => {
  const map: Record<string, string> = {}
  todoTypes.value.forEach((item) => {
    map[item.id] = item.color
  })
  return map
})

const activeType = ref('0')

const showDetailPop = ref(false)

// document.
onMounted(() => {
  const input = todoTitleInputRef.value
  if (input)
    input.focus()
  // 回车时focus
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if (todoTitleInputRef.value)
        todoTitleInputRef.value.focus()
    }
  })
})

function handleChangeActiveType(id: string) {
  activeType.value = id
}

function noop() { }

const todoTitle = ref('')

function handleAddTodo() {
  const title = todoTitle.value
  if (!title)
    return

  const type = activeType.value
  list.value.push({
    id: uuid(),
    title,
    type,
    checked: false,
    date: dayjs().format('YYYY-MM-DD'),
    createTime: new Date().getTime(),
  })
  todoTitle.value = ''
}

function handleDeleteTodo(id: string) {
  list.value = list.value.filter(item => item.id !== id)
}

// 将List按照添加时间排序
const sortedList = computed(() => {
  return list.value.sort((a, b) => {
    return b.createTime - a.createTime
  })
})
</script>

<template>
  <div
    cursor-pointer w-full h-full from-cyan-100 to-blue-200 bg-gradient-to-br dark:from-cyan-800 dark:to-blue-900
    rounded="$icon-radius" overflow-hidden @click="showDetailPop = true"
  >
    <template v-if="props.row < 2 || props.column < 2">
      <app-item-icon icon="https://files.codelife.cc/tools-icon/todo.svg" url="" />
    </template>
    <template v-else>
      <div text-xl text-left mx-3 my-1>
        Today
      </div>
      <hr color="gray/50" dark:color="white/50">
      <div m-2>
        <div
          v-for="todo in sortedList.filter(x => !x.checked).slice(0, 5)" :key="todo.id" text-left px-2 truncate dark:before="bg-white/70"
          before-bg-gray class="todo-item"
        >
          {{ todo.title }}
        </div>
      </div>
    </template>
    <teleport to="body">
      <Transition name="nested">
        <template v-if="showDetailPop">
          <div
            fixed top-0 bottom-0 left-0 right-0 bg="gray/30" backdrop-blur-sm z-99999 pt-50
            @click.stop="showDetailPop = false" @contextmenu.stop="showDetailPop = false"
          >
            <div
              max-w="60%" h="80%" bg="light-300/80" dark:bg="gray-500/80" m-auto flex flex-row relative
              @click.stop="noop"
            >
              <div w="30%" bg="#E3DDE3/50" dark:bg="gray-700/80" flex flex-col p-5 py-10>
                <div
                  cursor-pointer hover:bg="#D2CCD2/30" w-full h-40px truncate leading="40px" pl-10 pr-5
                  :style="{ background: activeType === '0' ? '#D2CCD2' : '' }" my-1 relative rounded-md transition-all
                  duration-300 @click.stop="handleChangeActiveType('0')"
                >
                  <div w-5 h-5 absolute bg-white left-2 top="50%" translate-y="-50%" rounded-full />
                  全部
                </div>
                <div
                  v-for="item in todoTypes" :key="item.id" hover:bg="#D2CCD2/30" cursor-pointer w-full h-40px
                  truncate leading="40px" pl-10 pr-5 :style="{ background: activeType === item.id ? '#D2CCD2' : '' }" my-1
                  relative rounded-md transition-all duration-300 @click.stop="handleChangeActiveType(item.id)"
                >
                  <div
                    w-5 h-5 absolute :style="{ background: item.color }" left-2 top="50%" translate-y="-50%"
                    rounded-full
                  />
                  {{ item.title }}
                </div>
              </div>
              <div flex-1 m-5 overflow-auto pb-50px>
                <div
                  v-for="item in activeType !== '0' ? sortedList.filter(x => x.type === activeType) : sortedList" :key="item.id"
                  flex w-full bg="white/40" dark:bg="gray/50" my-2 h-60px rounded-md items-start p-2
                  class="todo-item"
                >
                  <shy-checkbox
                    mx-2 :checked="item.checked" :color="typeTypeColorMap[item.type] ?? '#ffffff'"
                    @change="item.checked = !item.checked"
                  />
                  <div flex-1 flex flex-col>
                    <input v-model="item.title" :class="{ 'line-through': item.checked, 'color-gray': item.checked }" w-full bg-transparent>
                    <input v-model="item.date" w-130px text-sm color-gray type="date" bg-transparent>
                  </div>
                  <svg
                    class="todo-item-delete-icon" w-8 h-8 p-1 m-1 mx-2 aria-hidden="true"
                    hover:shadow-md cursor-pointer rounded-md
                    transition-all fill-red
                    @click="handleDeleteTodo(item.id)"
                  >
                    <use xlink:href="#icon-delete" />
                  </svg>
                </div>
              </div>
              <input
                ref="todoTitleInputRef"
                v-model="todoTitle" absolute w="67%" left="50%" translate-x="-27.5%" bottom-5
                h-50px p-5 bg="white/90" rounded-md shadow-md dark:bg="gray-700/90"
                placeholder="添加待办事项"
                @keyup.enter="handleAddTodo"
              >
            </div>
          </div>
        </template>
      </Transition>
    </teleport>
  </div>
</template>

<style scoped>
.todo-item {
  position: relative;
}

.todo-item::before {
  content: " ";
  position: absolute;
  top: 15%;
  left: 0;
  width: 2px;
  bottom: 15%;
  border-radius: 2px;
}

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
.todo-item-delete-icon {
  display: none;
  transition: all 0.3s ease-in-out;
}
.todo-item:hover .todo-item-delete-icon {
  display: block;
  transition: all 0.3s ease-in-out;
}
</style>
