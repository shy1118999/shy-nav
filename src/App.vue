<!--
 * @Author: shaohang-shy
 * @Date: 2022-03-11 17:55:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-04-10 22:13:26
 * @Description:
-->
<template>
  <Background />
  <Footer fixed top-0 right-6 />

  <main
    font-sans
    box-border
    h-full
    w-full
    text="center gray-700 dark:gray-200"
  >
    <router-view />
  </main>
</template>
