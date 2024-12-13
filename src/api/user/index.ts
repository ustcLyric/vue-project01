// 统一管理 用户相关请求接口
import request from '@/utils/request'
import type {UserInfoResp, UserLoginReq, UserLoginResp} from "@/api/user/type.ts";

// 统一管理接口
enum API_USER_URL {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 暴露请求函数

export const reqLogin = (data: UserLoginReq) => request.post<any, UserLoginResp>(API_USER_URL.LOGIN_URL, data)

export const reqUserInfo = () => request.get<any, UserInfoResp>(API_USER_URL.USERINFO_URL)
