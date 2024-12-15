// 通过vue-router实现模版路由配置
import {createRouter, createWebHashHistory} from "vue-router";
import {constantRoute} from "@/router/routes.ts";

// 创建路由器
const router = createRouter({
  // 路由模式 目前hash
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为配置
  scrollBehavior: () => ({left: 0, top: 0}),

})

export default router;
