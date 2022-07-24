/*
 * @Author: shaohang-shy
 * @Date: 2022-07-23 11:03:02
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-07-23 11:04:17
 * @Description: todo type storage
 */
export interface TodoTypeItem {
  id: string
  title: string
  color: string
}

export default useStorage('shy-nav-todo-type', [
  { id: '1', title: '工作', color: '#f5222d' },
  { id: '2', title: '学习', color: '#faad14' },
  { id: '3', title: '生活', color: '#52c41a' },
  { id: '4', title: '其他', color: '#1890ff' },
] as TodoTypeItem[])
