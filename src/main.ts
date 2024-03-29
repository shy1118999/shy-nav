/*
 * @Author: shaohang-shy
 * @Date: 2022-03-11 17:55:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-07-22 16:57:20
 * @Description:
 */
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import AppItemIcon from './components/apps/AppItemIcon.vue'
import AppFolder from './components/apps/AppFolder.vue'
import Calendar from './components/apps/Calendar.vue'
import TodoList from './components/apps/TodoList.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
app.component('AppItemIcon', AppItemIcon)
app.component('AppFolder', AppFolder)
app.component('Calendar', Calendar)
app.component('TodoList', TodoList)
app.use(router)
app.mount('#app')
