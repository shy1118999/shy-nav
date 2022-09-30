/*
 * @Author: shaohang-shy
 * @Date: 2022-07-23 11:01:07
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-30 17:52:03
 * @Description: todo list storage
 */

export interface TodoItem {
  id: string
  title: string
  type: string
  date?: Date
  checked: boolean
}

export default useStorage('shy-nav-todo-list', [] as TodoItem[])
