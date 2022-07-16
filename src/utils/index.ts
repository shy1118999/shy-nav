/*
 * @Author: shaohang-shy
 * @Date: 2022-07-16 17:53:30
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-07-16 17:55:56
 * @Description: utils
 */
export function imageToBase64(image: any) {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result?.toString() as string)
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.readAsDataURL(image)
  })
}
