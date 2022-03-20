/*
 * @Author: shaohang-shy
 * @Date: 2022-03-11 17:55:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-20 19:05:01
 * @Description:
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import '//at.alicdn.com/t/font_3262157_1lpbaiqbv67.js'
import AppItemIcon from './components/apps/AppItemIcon.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.component('AppItemIcon', AppItemIcon)
app.use(router)
app.mount('#app')
