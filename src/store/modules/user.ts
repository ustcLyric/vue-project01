// 创建用户相关仓库
import {defineStore} from "pinia";
// 引入api
import {reqLogin, reqUserInfo} from "@/api/user";
import type {UserInfoResp, UserLoginReq, UserLoginResp} from "@/api/user/type.ts";
import type {UserState} from '@/store/modules/types/type'
import {GET_TOKEN, SET_TOKEN} from "@/utils/token.ts";
import {constantRoute} from "@/router/routes.ts";

// 创建用户小仓库
const useUserStore = defineStore('User', {
  // 小仓库存储数据
  state: (): UserState => {
    return {
      // token: localStorage.getItem("TOKEN"), // 用户唯一标识
      token: GET_TOKEN(),// 用户唯一标识
      message: '',// 登陆出错信息
      menuRoutes: constantRoute,// 仓库存储路由
      userInfo: {
        userId: 0,
        userName: '',
        avator: '',
      },
    }
  },
  // 处理异步逻辑的地方
  actions: {
    // 用户登陆
    async userLogin(data: UserLoginReq) {
      console.log("user login1:", data)
      const result: UserLoginResp = await reqLogin(data)
      console.log(result)
      if (result.code === 200) {
        // 由于pinia/vuex存储数据其实利用js并非持久化
        this.token = (result.data.token as string)
        // 本地存储持久化
        // localStorage.setItem("TOKEN", (result.data.token as string))
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else if (result.code === 201) {
        return Promise.reject(new Error(result.data.message))
      }

    },
    // 用户信息获取
    async userInfo(data: UserInfoResp) {
      // 获取用户所有信息存储
      let userInfo = await reqUserInfo()
      console.log('userinfo:', userInfo)
    },
    removeUser() {
      this.userInfo.userId = 0,
        this.userInfo.userName = '',
        this.userInfo.avator = ''
    },
  },
  getters: {}
})

// 对外暴露小仓库
export default useUserStore;
