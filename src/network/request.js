import axios from "axios";

export function request(config) {
  // 创建实例
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 拦截器
  // 请求拦截
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  // 发送请求
  return instance1(config)
}
