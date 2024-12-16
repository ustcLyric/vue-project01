// 进行axios的二次封装：请求与响应
import axios from 'axios';
import {ElMessage} from "element-plus";
import useUserStore from "@/store/modules/user.ts";


// 1.利用axios对象create方法 创建axios实例 基础路径 超时时间
let request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径会携带/api
  timeout: 5000, // 超出5s即为失败
})
// 2.添加请求拦截器
request.interceptors.request.use((config) => {
  // 获取用户仓库
  let userStore = useUserStore();
  // config配置对象，heads属性请求头，经常给服务器端携带公共参数
  config.headers.set('token', userStore.token)
  // 返回配置对象
  return config;
})

// 3.添加响应拦截器
request.interceptors.response.use((response) => {
  // 成功回调

  // 简化数据
  return response.data;
}, (error) => {
  // 失败回调 处理http网络错误

  // 定义一个变量：存储网络错误信息
  let message = "";
  // http状态码
  const status = error.response.status;
  switch (status) {
    case 401:
      message = "Token过期";
      break;
    case 403:
      message = "无权访问";
      break;
    case 404:
      message = "请求地址错误";
      break;
    case 500:
      message = "服务器出现错误";
      break;
    default:
      message = "网络出现问题";
      break;
  }

  // 提示错误信息
  ElMessage({
    type: "error",
    message
  })
  return Promise.reject(error)

})

// 对外暴露
export default request;
