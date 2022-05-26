/*
 * @Author: shaohang-shy
 * @Date: 2022-03-21 22:46:50
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-04-05 14:38:00
 * @Description:
 */
// export default useStorage('shy-nav-apps', [])

export default useStorage('shy-nav-apps', [
  {
    id: 530001,
    iconType: 'iconfont',
    name: '常用应用',
    icon: '#icon-zhuangkeai',
    list: [
      {
        id: 520001,
        column: 2,
        row: 2,
        component: 'AppFolder',
        apps: [
          { id: 1, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.bilibili.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/bilibili.svg', title: '哔哩哔哩' },
          { id: 2, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.huya.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/huya.svg', title: '虎牙' },
          { id: 4, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.douyu.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/douyu.svg', title: '斗鱼' },
          { id: 6, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.iqiyi.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/iqiyi.svg', title: '爱奇艺' },
          { id: 7, column: 1, row: 1, component: 'AppItemIcon', url: 'https://v.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqvideo.svg', title: '腾讯视频' },
          { id: 5, column: 1, row: 1, component: 'AppItemIcon', url: 'https://y.qq.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/qqmusic.svg', title: 'QQ音乐' },
          { id: 13, column: 1, row: 1, component: 'AppItemIcon', url: 'https://music.163.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/music163.svg', title: '网易云音乐' },
          { id: 123, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.youku.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/youku.svg', title: '优酷' },
        ],
        title: '音视频/直播',
      },
      {
        id: 520002,
        column: 2,
        row: 2,
        component: 'AppFolder',
        apps: [
          { id: 521001, column: 1, row: 1, component: 'AppItemIcon', title: '知乎', url: 'https://www.zhihu.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/zhihu.svg' },
          { id: 521002, column: 1, row: 1, component: 'AppItemIcon', title: '掘金', url: 'https://juejin.cn/', icon: 'https://shy-nav.shaohang.xin/nav-icons/juejin.svg' },
          { id: 521003, column: 1, row: 1, component: 'AppItemIcon', title: 'V2EX', url: 'https://www.v2ex.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/v2ex.svg' },
          { id: 521004, column: 1, row: 1, component: 'AppItemIcon', title: '简书', url: 'https://www.jianshu.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/jianshu.svg' },
          { id: 521006, column: 1, row: 1, component: 'AppItemIcon', title: 'SegmentFault', url: 'https://segmentfault.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/segmentfault.svg' },
          { id: 521007, column: 1, row: 1, component: 'AppItemIcon', title: 'CSDN', url: 'https://www.csdn.net/', icon: 'https://shy-nav.shaohang.xin/nav-icons/csdn.svg' },
          { id: 521008, column: 1, row: 1, component: 'AppItemIcon', title: '51CTO', url: 'https://www.51cto.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/51cto.png' },
          { id: 521009, column: 1, row: 1, component: 'AppItemIcon', url: 'https://stackoverflow.com/', title: 'Stack Overflow', icon: 'https://shy-nav.shaohang.xin/nav-icons/stackoverflow.svg' },
          { id: 521005, column: 1, row: 1, component: 'AppItemIcon', title: '博客园', url: 'https://www.cnblogs.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/cnblogs.svg' },
        ],
        title: '技术社区',
      },
      {
        id: 520003,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://www.github.com/',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/github.svg',
        title: 'Github',
      },
      {
        id: 520004,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://www.gitee.com/',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/gitee.svg',
        title: 'Gitee',
      },
      {
        id: 520005,
        column: 2,
        row: 2,
        component: 'AppFolder',
        apps: [
          {
            id: 522001,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://vuejs.org/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/vuejs.svg',
            title: 'Vue',
          },
          {
            id: 522002,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://pinia.vuejs.org/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/pinia.svg',
            title: 'Pinia',
          },
          {
            id: 522003,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://vueuse.org/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/vueuse.svg',
            title: 'VueUse',
          },
          {
            id: 522004,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://element-plus.org/zh-CN/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/elementui.svg',
            title: 'ElementUI',
          },
          {
            id: 522005,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://www.iviewui.com/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/iviewui.png',
            title: 'iView',
          },
          {
            id: 522006,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://www.naiveui.com/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/naiveui.svg',
            title: 'NaiveUI',
          },
          {
            id: 522007,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://varlet.gitee.io/varlet-ui/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/varletui.png',
            title: 'Varlet',
          },
          {
            id: 522008,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://www.antdv.com/docs/vue/introduce-cn/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/ant-design-vue.svg',
            title: 'Ant Design Vue',
          },
          {
            id: 522011,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://zh.nuxtjs.org/',
            title: 'Nust.js',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/nuxtjs.svg',
          },
          {
            id: 522009,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://vuex.vuejs.org/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/vuex.svg',
            title: 'Vuex',
          },

          {
            id: 522010,
            column: 1,
            row: 1,
            component: 'AppItemIcon',
            url: 'https://router.vuejs.org/',
            icon: 'https://shy-nav.shaohang.xin/nav-icons/vue-router.svg',
            title: 'Vue Router',
          },
        ],
        title: 'VUE',
      },
      {
        id: 520006,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://www.bootcss.com/',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/bootstrap.svg',
        title: 'Bootstrap',
      },
      {
        id: 520007,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://www.yuque.com/',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/yuque.svg',
        title: '语雀',
      },
      {
        id: 520008,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://mail.google.com/',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/gmail.svg',
        title: 'Gmail',
      },
      {
        id: 520009,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://www.youtube.com/',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/youtube.svg',
        title: 'YouTube',
      },
      {
        id: 520010,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://discord.com/',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/discord.svg',
        title: 'Discord',
      },
      // TinyPng
      // 一个木函
      // 谷歌翻译
      // https://tool.lu/

      // php
      // Laravel
      // ThinkPHP
      // Swoole
      // 阿里云
      // 腾讯云
      // iconfont
      // MDN
      // 微信开发者
      // 微信公众平台
      // 阮一峰
      // overtrue
      // https://www.laruence.com/  Laruence
      // https://antfu.me/
      // https://www.figma.com/
      // 抖音
      // https://webcanvas.com/
      // https://tikolu.net/emojimix/
      // https://toonme.com/
      // https://www.zcool.com.cn/
      // https://js.design/
      // https://www.xiaopiu.com/
      // http://www.woshipm.com/
      // 蓝湖
      // https://airportal.cn/
      // https://pan.baidu.com/
      // https://www.aliyundrive.com/
      // https://map.baidu.com/
      // https://www.google.com/maps/
      // https://semi.design/zh-CN/
      // https://tdesign.tencent.com/
      // https://www.ui.cn/

      { id: 8, column: 1, row: 1, component: 'AppItemIcon', url: 'https://weibo.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/weibo.svg', title: '新浪微博' },
      { id: 11, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.12306.cn/index/', icon: 'https://shy-nav.shaohang.xin/nav-icons/12306.svg', title: '12306' },
      { id: 14, column: 1, row: 1, component: 'AppItemIcon', url: 'https://www.douban.com/', icon: 'https://shy-nav.shaohang.xin/nav-icons/douban.svg', title: '豆瓣' },
    ],
  },

  {
    id: 2,
    name: '学习',
    iconType: 'iconfont',
    icon: '#icon-a-xiaolianbiaoqing',
    list: [

      {
        id: 18,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://leetcode-cn.com/',
        title: '力扣',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/leetcode.svg',
      },
      {
        id: 21,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://electronjs.org/',
        title: 'Electron',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/electronjs.svg',
      },
      {
        id: 22,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://zh-hans.reactjs.org/',
        title: 'React',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/react.svg',
      },

      {
        id: 25,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://www.tool2.cn/',
        title: '兔二工具',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/tool2.svg',
      },
      {
        id: 26,
        column: 1,
        row: 1,
        component: 'AppItemIcon',
        url: 'https://uniapp.dcloud.io/',
        title: 'uniapp',
        icon: 'https://shy-nav.shaohang.xin/nav-icons/uniapp.svg',
      },

    ],
  },
])
