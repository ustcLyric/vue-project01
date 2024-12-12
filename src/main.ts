
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// svg 插件需要
import 'virtual:svg-icons-register'
import SvgIndex from "@/components/SvgIcon/svgIndex.vue";
// 引入自定义插件对象 注册整个项目全局组件
import gloalComponent from '@/components'
// 获取应用实例
const app = createApp(App)
// 1.引入 element-plus插件和样式 并配置国际化
app.use(ElementPlus,{
  locale: zhCn, // element-plus国际化配置
})
app.use(createPinia())
console.log(import.meta.env)

// 全局组件
// app.component('SvgIcon',SvgIndex)

// 安装自定义插件对象
app.use(gloalComponent)
// console.log(gloalComponent)
// 将应用挂载到挂载点
app.mount('#app')
