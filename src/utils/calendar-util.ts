/*
 * @Author: shaohang-shy
 * @Date: 2021-12-29 22:50:57
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-10-01 19:58:58
 * @Description: calendar util
 */
import CALENDAR from '~/utils/calendar'

class Calendar {
  date: { fullDate: string, year: number, month: string | number, date: string | number, day: number }
  selected: any
  startDate: any
  endDate: any
  range: any
  multipleStatus: { before: string, after: string, data: any[] }
  weeks: any
  canlender: any
  constructor({ date, selected, startDate, endDate, range }: any = {}) {
    // 当前日期
    this.date = this.getDate(date) // 当前初入日期
    // 打点信息
    this.selected = selected || []
    // 范围开始
    this.startDate = startDate
    // 范围结束
    this.endDate = endDate
    this.range = range
    // 多选状态
    this.multipleStatus = {
      before: '',
      after: '',
      data: [],
    }
    // 每周日期
    this.weeks = {}

    this._getWeek(this.date.fullDate)
  }

  /**
   * 获取任意时间
   */
  getDate(date: Date | string, AddDayCount = 0, str = 'day') {
    if (!date)
      date = new Date()

    if (typeof date !== 'object')
      date = date.replace(/-/g, '/')

    const dd = new Date(date)

    switch (str) {
      case 'day':
        dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
        break
      case 'month':
        if (dd.getDate() === 31)
          dd.setDate(dd.getDate() + AddDayCount)

        else
          dd.setMonth(dd.getMonth() + AddDayCount) // 获取AddDayCount天后的日期

        break
      case 'year':
        dd.setFullYear(dd.getFullYear() + AddDayCount) // 获取AddDayCount天后的日期
        break
    }
    const y = dd.getFullYear()
    const m
      = dd.getMonth() + 1 < 10 ? `0${dd.getMonth() + 1}` : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
    const d = dd.getDate() < 10 ? `0${dd.getDate()}` : dd.getDate() // 获取当前几号，不足10补0
    return {
      fullDate: `${y}-${m}-${d}`,
      year: y,
      month: m,
      date: d,
      day: dd.getDay(),
    }
  }

  /**
   * 获取上月剩余天数
   */

  _getLastMonthDays(firstDay: number, full: { fullDate?: string, year: any, month: any, date?: string | number, day?: number }) {
    const dateArr = []
    for (let i = firstDay; i > 0; i--) {
      const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate()
      dateArr.push({
        date: beforeDate,
        month: full.month - 1,
        lunar: this.getlunar(full.year, full.month - 1, beforeDate),
        disable: true,
      })
    }
    return dateArr
  }

  /**
   * 获取本月天数
   */

  _currentMonthDys(dateData: number, full: { fullDate?: string, year: any, month: any, date?: string | number, day?: number }) {
    const dateArr = []
    const { fullDate } = this.date
    for (let i = 1; i <= dateData; i++) {
      const nowDate = `${full.year}-${
        full.month < 10 ? full.month : full.month
      }-${i < 10 ? `0${i}` : i}`
      // 是否今天
      const isDay = fullDate === nowDate
      // 获取打点信息
      const info
        = this.selected
        // eslint-disable-next-line array-callback-return
        && this.selected.find((item: { date: any }) => {
          if (this.dateEqual(nowDate, item.date))
            return item
        })

      // 日期禁用
      let disableBefore = true
      let disableAfter = true
      if (this.startDate) {
        const dateCompBefore = this.dateCompare(this.startDate, fullDate)
        disableBefore = this.dateCompare(
          dateCompBefore ? this.startDate : fullDate,
          nowDate,
        )
      }

      if (this.endDate) {
        const dateCompAfter = this.dateCompare(fullDate, this.endDate)
        disableAfter = this.dateCompare(
          nowDate,
          dateCompAfter ? this.endDate : fullDate,
        )
      }

      const multiples = this.multipleStatus.data
      let checked = false
      let multiplesStatus = -1
      if (this.range) {
        if (multiples) {
          multiplesStatus = multiples.findIndex((item) => {
            return this.dateEqual(item, nowDate)
          })
        }
        if (multiplesStatus !== -1)
          checked = true
      }

      const data = {
        fullDate: nowDate,
        year: full.year,
        date: i,
        multiple: this.range ? checked : false,
        month: full.month,
        lunar: this.getlunar(full.year, full.month, i),
        disable: !disableBefore || !disableAfter,
        isDay,
        extraInfo: info,
      }
      // if (info)
      //   data.extraInfo = info

      dateArr.push(data)
    }
    return dateArr
  }

  /**
   * 获取下月天数
   */

  _getNextMonthDays(surplus: number, full: { fullDate?: string, year: any, month: any, date?: string | number, day?: number }) {
    const dateArr = []
    for (let i = 1; i < surplus + 1; i++) {
      dateArr.push({
        date: i,
        month: Number(full.month) + 1,
        lunar: this.getlunar(full.year, Number(full.month) + 1, i),
        disable: true,
      })
    }
    return dateArr
  }

  /**
   * 设置日期
   * @param {object} date
   */
  setDate(date: any) {
    this._getWeek(date)
  }

  /**
   * 获取当前日期详情
   * @param {object} date
   */
  getInfo(date: string | Date) {
    if (!date)
      date = new Date()

    const dateInfo = this.canlender.find(
      (item: { fullDate: string }) => item.fullDate === this.getDate(date).fullDate,
    )
    return dateInfo
  }

  /**
   * 比较时间大小
   */
  dateCompare(startDate: string, endDate: string) {
    // 计算截止时间
    const s = new Date(startDate.replace('-', '/').replace('-', '/'))
    // 计算详细项的截止时间
    const e = new Date(endDate.replace('-', '/').replace('-', '/'))
    if (s <= e)
      return true

    else
      return false
  }

  /**
   * 比较时间是否相等
   */
  dateEqual(before: string, after: string) {
    // 计算截止时间
    const b = new Date(before.replace('-', '/').replace('-', '/'))
    // 计算详细项的截止时间
    const a = new Date(after.replace('-', '/').replace('-', '/'))
    if (b.getTime() - a.getTime() === 0)
      return true

    else
      return false
  }

  /**
   * 获取日期范围内所有日期
   * @param {object} begin
   * @param {object} end
   */
  geDateAll(begin: string, end: string) {
    const arr = []
    const ab = begin.split('-')
    const ae = end.split('-')
    const db = new Date()
    db.setFullYear(Number.parseInt(ab[0]), Number.parseInt(ab[1]) - 1, Number.parseInt(ab[2]))
    const de = new Date()
    de.setFullYear(Number.parseInt(ae[0]), Number.parseInt(ae[1]) - 1, Number.parseInt(ae[2]))
    const unixDb = db.getTime() - 24 * 60 * 60 * 1000
    const unixDe = de.getTime() - 24 * 60 * 60 * 1000
    for (let k = unixDb; k <= unixDe;) {
      k += 24 * 60 * 60 * 1000
      arr.push(this.getDate(new Date(k)).fullDate)
    }
    return arr
  }

  /**
   * 计算阴历日期显示
   */
  getlunar(year: string | number, month: number, date: number) {
    return CALENDAR.solar2lunar(year, month, date)
  }

  /**
   * 设置打点
   */
  setSelectInfo(data: any, value: any) {
    this.selected = value
    this._getWeek(data)
  }

  /**
   *  获取多选状态
   */
  setMultiple(fullDate: string) {
    const { before, after } = this.multipleStatus
    if (!this.range)
      return
    if (before && after) {
      this.multipleStatus.before = ''
      this.multipleStatus.after = ''
      this.multipleStatus.data = []
      this._getWeek(fullDate)
    }
    else if (!before) {
      this.multipleStatus.before = fullDate
    }
    else {
      this.multipleStatus.after = fullDate
      if (
        this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)
      ) {
        this.multipleStatus.data = this.geDateAll(
          this.multipleStatus.before,
          this.multipleStatus.after,
        )
      }
      else {
        this.multipleStatus.data = this.geDateAll(
          this.multipleStatus.after,
          this.multipleStatus.before,
        )
      }
      this._getWeek(fullDate)
    }
  }

  /**
   * 获取每周数据
   * @param {object} dateData
   */
  _getWeek(dateData: string | Date) {
    const { year, month } = this.getDate(dateData)
    const firstDay = new Date(year, Number.parseInt(`${month}`) - 1, 1).getDay()
    const currentDay = new Date(year, Number.parseInt(`${month}`), 0).getDate()
    const dates = {
      lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)), // 上个月末尾几天
      currentMonthDys: this._currentMonthDys(
        currentDay,
        this.getDate(dateData),
      ), // 本月天数
      nextMonthDays: [] as any[], // 下个月开始几天
      weeks: [],
    }
    let canlender: any[] = []
    const surplus
      = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length)

    dates.nextMonthDays = this._getNextMonthDays(
      surplus,
      this.getDate(dateData),
    )
    canlender = canlender.concat(
      dates.lastMonthDays,
      dates.currentMonthDys,
      dates.nextMonthDays,
    )
    const weeks = {} as any
    // 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
    for (let i = 0; i < canlender.length; i++) {
      if (i % 7 === 0)
        weeks[Number.parseInt(`${i / 7}`)] = Array.from({ length: 7 })

      weeks[Number.parseInt(`${i / 7}`)][i % 7] = canlender[i]
    }
    this.canlender = canlender
    this.weeks = weeks
  }
}

export default Calendar
