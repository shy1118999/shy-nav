<!--
 * @Author: shaohang-shy
 * @Date: 2022-05-28 08:58:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:56:28
 * @Description: Test
-->
<script setup lang="ts">
// import { liveQuery } from 'dexie'
import type { Note } from '../db'
import { db } from '../db'
// import TodoList from '~/components/apps/TodoList.vue'

const dialog = ref<HTMLDialogElement | null>(null)
function showDialog() {
  dialog.value?.showModal()
}
function handleDialogClose(e) {
  console.log(e)
}
const noteData = ref({
  title: '',
  content: '',
})

async function handleCreateNote() {
  const id = await db.notes.add({
    title: noteData.value.title,
    content: noteData.value.content,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  console.log(id)
  // 清空noteData
  noteData.value = {
    title: '',
    content: '',
  }
}

const notes = ref<Note[]>([])

db.notes.orderBy('createdAt').toArray().then((result) => {
  console.log('res', result)
  notes.value = result
})

const checked = ref(false)
</script>

<template>
  <div p-10>
    Test
    <div flex z-10 fixed top-100 left-100>
      <input type="color">
    </div>
    <button @click="showDialog">
      show
    </button>
    <dialog ref="dialog" class="dialog" @close="handleDialogClose">
      This is Dialog.
    </dialog>
    <div>
      <input v-model="noteData.title" placeholder="Title" type="text">
      <textarea v-model="noteData.content" placeholder="Content" />
      <button btn @click="handleCreateNote">
        确定添加
      </button>
    </div>
    <shy-checkbox :checked="checked" @change="checked = !checked" />
    <shy-checkbox :checked="false" />
    <input type="date" bg-transparent>
  </div>
</template>

<style>
@keyframes slideDown {
  from {
    transform: translateY(-100px);
  }

  to {
    transform: translateY(0);
  }
}

.dialog[open] {
  animation: slideDown 0.2s ease;
}

.dialog {
  animation: slideDown 0.2s ease;

}
</style>
