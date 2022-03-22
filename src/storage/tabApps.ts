/*
 * @Author: shaohang-shy
 * @Date: 2022-03-22 23:06:01
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-22 23:06:26
 * @Description:tabApps
 */

export default useStorage('shy-nav-tab-apps', [
  { id: 1, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://www.bilibili.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/bilibili.svg' }, title: '哔哩哔哩' },
  { id: 2, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://www.huya.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/huya.svg' }, title: '虎牙' },
  { id: 4, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://www.douyu.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/douyu.svg' }, title: '斗鱼' },
  { id: 5, column: 1, row: 1, component: 'AppItemIcon', props: { url: 'https://y.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqmusic.svg' }, title: 'QQ音乐' },
])
