// 登陆接口需要携带的信息
export interface UserLoginReq {
  username: string;
  password: string;
}

interface dataType {
  token?: string;
  message?: string;
}

// 登陆接口返回的信息
export interface UserLoginResp {
  code: number,
  data: dataType
}

export interface UserInfo {
  userId: number,
  userName: string,
  avator: string
}

interface User {
  checkUser: UserInfo
}

// 请求用户信息接口返回的信息
export interface UserInfoResp {
  code: number,
  data: User,
}

