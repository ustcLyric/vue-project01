// 定义洪湖仓库数据state类型
import type {RouteRecordRaw} from "vue-router";
import type {UserInfo} from "@/api/user/type.ts"

export interface UserState {
  token: string | null,
  message: string | null,
  menuRoutes: RouteRecordRaw
  userInfo: UserInfo,
}
