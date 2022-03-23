/*
 * @Author: shaohang-shy
 * @Date: 2022-03-23 21:06:10
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-23 21:06:10
 * @Description: search-engine
 */
export default useStorage('shy-nav-search-engine', [
  {
    name: 'Google',
    url: 'https://www.google.com/search?q={$1}',
    icon: '#icon-google',
  },
  {
    name: 'Baidu',
    url: 'https://www.baidu.com/s?wd={$1}',
    icon: '#icon-baidu',
  },
  {
    name: 'Bing',
    url: 'https://cn.bing.com/search?q={$1}',
    icon: '#icon-biying',
  },
  {
    name: '知乎',
    url: 'https://www.zhihu.com/search?type=content&q={$1}',
    icon: '#icon-zhihu',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/search?q={$1}',
    icon: '#icon-GitHub',
  },
  {
    name: '哔哩哔哩',
    url: 'https://search.bilibili.com/all?keyword={$1}',
    icon: '#icon-bilibili',
  },
])
