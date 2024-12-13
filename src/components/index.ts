import SvgIcon from './SvgIcon/SvgIndex.vue'
import type {App, Component} from "vue";

const allGloablComponent:{[key:string]:Component}   = {SvgIcon}
// 对外暴露插件对象
export default {
  install: (app:App) => {
    // 注册项目全部的全局组件
    Object.keys(allGloablComponent).forEach(key => {
      app.component(key, allGloablComponent[key])
    })
  }
}

