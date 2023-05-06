/*
 * @Author: shaohang-shy
 * @Date: 2022-07-23 11:01:07
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-05-06 10:02:54
 * @Description: todo list storage
 */

export interface TodoItem {
  id: string
  title: string
  type: string
  date?: string
  checked: boolean
  createTime: number
}

export default useStorage('shy-nav-todo-list', [] as TodoItem[])
