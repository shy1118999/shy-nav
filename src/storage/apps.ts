/*
 * @Author: shaohang-shy
 * @Date: 2022-03-21 22:46:50
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-25 23:41:49
 * @Description:
 */
export default useStorage('shy-nav-apps', [
  {
    id: 1,
    iconType: 'iconfont',
    name: '常用应用',
    icon: '#icon-zhuangkeai',
    list: [
      {
        id: 1001,
        column: 1,
        row: 1,
        component: 'AppFolder',
        apps: [
          { id: 1, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.bilibili.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/bilibili.svg', title: '哔哩哔哩' },
          { id: 2, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.huya.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/huya.svg', title: '虎牙' },
          { id: 4, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.douyu.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/douyu.svg', title: '斗鱼' },
          { id: 22, column: 1, row: 1, component: 'AppItemIcon', url: 'https://zh-hans.reactjs.org/', icon: 'https://files.codelife.cc/website/5fec316e8af9860fb41a9ca4.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'React' },
        ],
        title: '文件夹',
      },
      { id: 1, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.bilibili.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/bilibili.svg', title: '哔哩哔哩' },
      { id: 2, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.huya.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/huya.svg', title: '虎牙' },
      { id: 4, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.douyu.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/douyu.svg', title: '斗鱼' },
      { id: 5, column: 1, row: 1, component: 'AppItemIcon', url: 'https://y.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqmusic.svg', title: 'QQ音乐' },
      { id: 6, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.iqiyi.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/iqiyi.svg', title: '爱奇艺' },
      { id: 7, column: 1, row: 1, component: 'AppItemIcon', url: 'https://v.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqvideo.svg', title: '腾讯视频' },
      { id: 8, column: 1, row: 1, component: 'AppItemIcon', url: 'https://weibo.com/', icon: 'https://files.codelife.cc/website/weibo.svg', title: '新浪微博' },
      { id: 9, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.zhihu.com/', icon: 'https://files.codelife.cc/website/zhihu.svg', title: '知乎' },
      { id: 11, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.12306.cn/index/', icon: 'https://files.codelife.cc/website/12306.svg', title: '12306' },
      { id: 13, column: 1, row: 1, component: 'AppItemIcon', url: 'https://music.163.com/', icon: 'https://files.codelife.cc/website/music163.svg', title: '网易云音乐' },
      { id: 14, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.douban.com/', icon: 'https://files.codelife.cc/website/douban.svg', title: '豆瓣' },
    ],
  },
  {
    id: 2,
    name: '学习',
    iconType: 'iconfont',
    icon: '#icon-a-xiaolianbiaoqing',
    list: [
      { id: 15, column: 1, row: 1, component: 'AppItemIcon', url: 'https://gitee.com/', icon: 'https://files.codelife.cc/website/5ddb94f43c4366058063c8ed.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: '码云Gitee' },
      { id: 16, column: 1, row: 1, component: 'AppItemIcon', url: 'https://juejin.cn/', icon: 'https://files.codelife.cc/website/595a178e703e23483da878a4.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: '掘金' },
      { id: 17, column: 1, row: 1, component: 'AppItemIcon', url: 'https://stackoverflow.com/', icon: 'https://files.codelife.cc/website/5e017f893c4366058063ca08.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'Stack Overflow' },
      { id: 18, column: 1, row: 1, component: 'AppItemIcon', url: 'https://leetcode-cn.com/', icon: 'https://files.codelife.cc/website/5ca4655c81def7042f75ad8b.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: '力扣' },
      { id: 19, column: 1, row: 1, component: 'AppItemIcon', url: 'https://github.com/', icon: 'https://files.codelife.cc/website/595a178e703e23483da8717c.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'GitHub' },
      { id: 20, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.csdn.net/', icon: 'https://files.codelife.cc/website/595a178e703e23483da874f3.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'CSDN' },
      { id: 21, column: 1, row: 1, component: 'AppItemIcon', url: 'https://electronjs.org/', icon: 'https://files.codelife.cc/website/5c887d0a81def7042f75ad22.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'Electron' },
      { id: 22, column: 1, row: 1, component: 'AppItemIcon', url: 'https://zh-hans.reactjs.org/', icon: 'https://files.codelife.cc/website/5fec316e8af9860fb41a9ca4.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'React' },
      { id: 23, column: 1, row: 1, component: 'AppItemIcon', url: 'https://cn.vuejs.org/', icon: 'https://files.codelife.cc/website/5c2052f3bff15474e7a4753e.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'Vue' },
      { id: 24, column: 1, row: 1, component: 'AppItemIcon', url: 'https://zh.nuxtjs.org/', icon: 'https://files.codelife.cc/website/5ae2c0a8eefad85931bfa632.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'Nust.js' },
      { id: 25, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.tool2.cn/', icon: 'https://files.codelife.cc/website/5def63073c4366058063c999.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: '兔二工具' },
      { id: 26, column: 1, row: 1, component: 'AppItemIcon', url: 'https://uniapp.dcloud.io/', icon: 'https://files.codelife.cc/website/5dad61e86286ed4818112bb3.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'uniapp' },

    ],
  },
])

// export default ref([
//   {
//     id: 1,
//     iconType: 'iconfont',
//     name: '常用应用',
//     icon: '#icon-zhuangkeai',
//     list: [
//       {
//         id: 1001,
//         column: 1,
//         row: 1,
//         component: 'AppFolder',
//         apps: [
//           { id: 1, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.bilibili.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/bilibili.svg', title: '哔哩哔哩' },
//           { id: 2, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.huya.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/huya.svg', title: '虎牙' },
//           { id: 4, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.douyu.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/douyu.svg', title: '斗鱼' },
//           { id: 22, column: 1, row: 1, component: 'AppItemIcon', url: 'https://zh-hans.reactjs.org/', icon: 'https://files.codelife.cc/website/5fec316e8af9860fb41a9ca4.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'React' },
//         ],
//         title: '文件夹',
//       },
//       { id: 1, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.bilibili.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/bilibili.svg', title: '哔哩哔哩' },
//       { id: 2, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.huya.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/huya.svg', title: '虎牙' },
//       { id: 4, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.douyu.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/douyu.svg', title: '斗鱼' },
//       { id: 5, column: 1, row: 1, component: 'AppItemIcon', url: 'https://y.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqmusic.svg', title: 'QQ音乐' },
//       { id: 6, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.iqiyi.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/iqiyi.svg', title: '爱奇艺' },
//       { id: 7, column: 1, row: 1, component: 'AppItemIcon', url: 'https://v.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqvideo.svg', title: '腾讯视频' },
//       { id: 8, column: 1, row: 1, component: 'AppItemIcon', url: 'https://weibo.com/', icon: 'https://files.codelife.cc/website/weibo.svg', title: '新浪微博' },
//       { id: 9, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.zhihu.com/', icon: 'https://files.codelife.cc/website/zhihu.svg', title: '知乎' },
//       { id: 11, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.12306.cn/index/', icon: 'https://files.codelife.cc/website/12306.svg', title: '12306' },
//       { id: 13, column: 1, row: 1, component: 'AppItemIcon', url: 'https://music.163.com/', icon: 'https://files.codelife.cc/website/music163.svg', title: '网易云音乐' },
//       { id: 14, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.douban.com/', icon: 'https://files.codelife.cc/website/douban.svg', title: '豆瓣' },
//     ],
//   },
//   {
//     id: 2,
//     name: '学习',
//     iconType: 'iconfont',
//     icon: '#icon-a-xiaolianbiaoqing',
//     list: [
//       { id: 15, column: 1, row: 1, component: 'AppItemIcon', url: 'https://gitee.com/', icon: 'https://files.codelife.cc/website/5ddb94f43c4366058063c8ed.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: '码云Gitee' },
//       { id: 16, column: 1, row: 1, component: 'AppItemIcon', url: 'https://juejin.cn/', icon: 'https://files.codelife.cc/website/595a178e703e23483da878a4.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: '掘金' },
//       { id: 17, column: 1, row: 1, component: 'AppItemIcon', url: 'https://stackoverflow.com/', icon: 'https://files.codelife.cc/website/5e017f893c4366058063ca08.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'Stack Overflow' },
//       { id: 18, column: 1, row: 1, component: 'AppItemIcon', url: 'https://leetcode-cn.com/', icon: 'https://files.codelife.cc/website/5ca4655c81def7042f75ad8b.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: '力扣' },
//       { id: 19, column: 1, row: 1, component: 'AppItemIcon', url: 'https://github.com/', icon: 'https://files.codelife.cc/website/595a178e703e23483da8717c.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'GitHub' },
//       { id: 20, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.csdn.net/', icon: 'https://files.codelife.cc/website/595a178e703e23483da874f3.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'CSDN' },
//       { id: 21, column: 1, row: 1, component: 'AppItemIcon', url: 'https://electronjs.org/', icon: 'https://files.codelife.cc/website/5c887d0a81def7042f75ad22.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'Electron' },
//       { id: 22, column: 1, row: 1, component: 'AppItemIcon', url: 'https://zh-hans.reactjs.org/', icon: 'https://files.codelife.cc/website/5fec316e8af9860fb41a9ca4.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'React' },
//       { id: 23, column: 1, row: 1, component: 'AppItemIcon', url: 'https://cn.vuejs.org/', icon: 'https://files.codelife.cc/website/5c2052f3bff15474e7a4753e.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'Vue' },
//       { id: 24, column: 1, row: 1, component: 'AppItemIcon', url: 'https://zh.nuxtjs.org/', icon: 'https://files.codelife.cc/website/5ae2c0a8eefad85931bfa632.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'Nust.js' },
//       { id: 25, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.tool2.cn/', icon: 'https://files.codelife.cc/website/5def63073c4366058063c999.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: '兔二工具' },
//       { id: 26, column: 1, row: 1, component: 'AppItemIcon', url: 'https://uniapp.dcloud.io/', icon: 'https://files.codelife.cc/website/5dad61e86286ed4818112bb3.png?x-oss-process=image/resize,limit_0,m_fill,w_150,h_150/quality,q_100', title: 'uniapp' },

//     ],
//   },
// ])
