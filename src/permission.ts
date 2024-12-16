// 路由鉴权 实现路由能否被访问

import router from "@/router";

import nprogress from "nprogress";
// 引入进度样式
import "nprogress/nprogress.css";

// 全局守卫：项目中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // to 即将访问的路由
  console.log('to', to);
  // from 即将前往的路由
  console.log('from', from);
  // next 放行
  console.log('next', next);
  nprogress.start();
  next()

})

router.afterEach((to, from) => {

})
