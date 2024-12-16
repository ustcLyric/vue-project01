// 路由鉴权 实现路由能否被访问

import router from "@/router";
import setting from "@/setting.ts";

import nprogress from "nprogress";
// 引入进度样式
import "nprogress/nprogress.css";

import pinia  from "./store";

import useUserStore from "@/store/modules/user.ts";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";

const userStore = useUserStore(pinia);



// 登陆路由 ｜ 404 ｜ 权限管理 ｜ 用户信息 ｜ 数据大屏


// 全局守卫：项目中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  document.title = setting.documentTitle + to.meta.title
  // // to 即将访问的路由
  // console.log('to', to);
  // // from 即将前往的路由
  // console.log('from', from);
  // // next 放行
  // console.log('next', next);

  // 1.用户未登陆 仅能访问登陆页面
  const token = userStore.token

  // 2.获取用户名
  const username =userStore.userInfo.userName
  if (token) {
    if(to.path === "/login") {
      next({path:'/'})
    }else{
      if(username){
        next()
      }else {
        // 无信息则请求
        try {
          await userStore.userInfo()
          next()
        }catch(err){
          // token 过期 ｜ token被修改
          // 1.删除用户信息
          userStore.removeUser()
          // TODO 2. 提醒服务器token失效
          console.log('情趣失败')
          ElMessage.error(err)
          next({path: "/login",query:{redirect:to.path}});
        }
      }
    }

  }else {
    if(to.path === "/login") {
        next()
    }else{
      next({path: "/login",query:{redirect:to.path}});
    }
  }

// 2.用户登录成功 不可访问登陆页面
  nprogress.start();
  next()

})

router.afterEach((to, from) => {

})


