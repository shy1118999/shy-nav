/*
 * @Author: shaohang-shy
 * @Date: 2022-07-22 13:48:01
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-07-22 13:49:53
 * @Description: db index
 */
import Dexie from 'dexie'

export interface Note {
  id?: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export class MySubClassedDexie extends Dexie {
  notes!: Dexie.Table<Note, number>
  constructor() {
    super('myDayabase')
    this.version(1).stores({
      notes: '++id,title,content,createdAt,updatedAt',
    })
  }
}

export const db = new MySubClassedDexie()
