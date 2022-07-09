/*
 * @Author: shaohang-shy
 * @Date: 2022-06-04 17:41:03
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-07-09 09:56:26
 * @Description: html.d.ts
 */
// refer: https://github.com/johnsoncodehk/volar/issues/1077#issuecomment-1145361472
// for native html elements
declare module '@vue/runtime-dom' {
  type HTMLAttributes = Record<string, any>
  type SVGAttributes = Record<string, any>
}

// for vue components
declare module '@vue/runtime-core' {
  type AllowedComponentProps = Record<string, any>
}

export { }
