/*
 * @Author: shaohang-shy
 * @Date: 2022-03-23 21:08:31
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-03-23 21:08:31
 * @Description: currentSearchEngine
 */
export default useStorage('shy-nav-current-search-engine', {
  name: 'Google',
  url: 'https://www.google.com/search?q={$1}',
  icon: '#icon-google',
})
