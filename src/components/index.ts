import SvgIcon from './SvgIcon/SvgIndex.vue'
import type {App, Component} from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGloablComponent:{[key:string]:Component}   = {SvgIcon}
// 对外暴露插件对象
export default {
  install: (app:App) => {
    // 注册项目全部的全局组件
    Object.keys(allGloablComponent).forEach(key => {
      app.component(key, allGloablComponent[key])
    })
    // 注册Element-plus提供的所呕图标为全局
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}

