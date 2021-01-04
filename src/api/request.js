import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})
// request拦截器
// service.interceptors.request.use(config => {
//
// })

// response拦截器
service.interceptors.response.use(
  response => {
    /**
     * code不为0 表示服务端出错
     */
    const res = response.data
    if (res.code !== 0) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 3 * 1000
      })
      //未登录可以跳到登录页面 ?
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
