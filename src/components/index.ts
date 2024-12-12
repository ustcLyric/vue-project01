import SvgIcon from './SvgIcon/svgIndex.vue'

const allGloablComponent   = {SvgIcon}
// 对外暴露插件对象
export default {
  install: (app) => {
    // 注册项目全部的全局组件
    Object.keys(allGloablComponent).forEach(key => {
      app.component(key, allGloablComponent[key])
    })
  }
}

