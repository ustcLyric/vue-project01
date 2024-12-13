// 登陆接口需要携带的信息
export interface UserLoginReq {
  username: string;
  password: string;
}

interface dataType {
  token: string;
}

// 登陆接口返回的信息
export interface UserLoginResp {
  code: number,
  data: dataType
}

interface userInfo {
  userId: number
}

interface user {
  checkUser: userInfo
}

// 请求用户信息接口返回的信息
export interface UserInfoResp {
  code: number,
  data: user,
}

