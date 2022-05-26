/*
 * @Author: shaohang-shy
 * @Date: 2022-03-22 23:06:01
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-04-05 14:36:16
 * @Description:tabApps
 */

export default useStorage('shy-nav-tab-apps', [
  // {
  //   id: 1,
  //   column: 1,
  //   row: 1,
  //   component: 'AppItemIcon',
  //   props: { url: 'https://www.bilibili.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/bilibili.svg' },
  //   title: '哔哩哔哩',
  // },
  { id: 610001, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.bilibili.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/bilibili.svg', title: '哔哩哔哩' },

  {
    id: 610002,
    column: 1,
    row: 1,
    component: 'AppItemIcon',
    title: '知乎',
    url: 'https://www.zhihu.com/',
    icon: 'https://shy-nav.shaohang.xin/nav-icons/zhihu.svg',
  },
  {
    id: 610003,
    column: 1,
    row: 1,
    component: 'AppItemIcon',
    url: 'https://www.github.com/',
    icon: 'https://shy-nav.shaohang.xin/nav-icons/github.svg',
    title: 'Github',
  },
  { id: 610004, column: 1, row: 1, component: 'AppItemIcon', url: 'https://y.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqmusic.svg', title: 'QQ音乐' },

  // {
  //   id: 5,
  //   column: 1,
  //   row: 1,
  //   component: 'AppItemIcon',
  //   props: { url: 'https://y.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqmusic.svg' },
  //   title: 'QQ音乐',
  // },
])
