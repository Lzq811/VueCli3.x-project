/* 
* axios 相关的请求响应拦截 
* 通用参数可以在这里统一配置
* 响应参数可以在这里统一配置
*/

// import { API_SERVER } from 'shared/config'
import router from '@/router'
import axios from 'axios'
import Vue from 'vue'

const API_SERVER = {
  default: 'https://12.147.178:7072', // 后台的访问地址
  GoldenEye: 'https://12.147.178:7071',
  screenUrl: 'https://12.147.178:7070'
}

let show = true

// 请求拦截器
axios.interceptors.request.use(req => {
  show = true
  let url = ''
  if (req.method === 'get') {
    url = req.url.method
    delete req.url.method
    req.params = req.url
    req.url = `${API_SERVER.default}${url}`
    if (url === '/v1/user/login') {
      if (sessionStorage.getItem('token') && !req.headers['x-auth-token']) {
        req.headers['x-auth-token'] = sessionStorage.getItem('token')
      }
      req.url = `${API_SERVER.GoldenEye}${url}`
    } else if (url === '/data/screen/getMenuList') {
      if (sessionStorage.getItem('screentoken') && !req.headers['Authorization']) {
        req.headers['Authorization'] = sessionStorage.getItem('screentoken')
      }
      req.url = `${API_SERVER.screenUrl}${url}`
    } else {
      if (sessionStorage.getItem('UserId') && !req.headers['x-auth-token']) {
        req.headers['x-auth-token'] = sessionStorage.getItem('UserId')
      }
    }
  } else {
    if (req.data === 1) {
      if (sessionStorage.getItem('token') && !req.headers['x-auth-token']) {
        req.headers['x-auth-token'] = sessionStorage.getItem('token')
      }
      req.param = req.url
      req.url = `${API_SERVER.GoldenEye}${req.param.method}`
      req.data = req.param.data
    } else if (req.data === 2) {
      if (sessionStorage.getItem('screentoken') && !req.headers['x-auth-token']) {
        req.headers['x-auth-token'] = sessionStorage.getItem('screentoken')
      }
      url = req.url.method
      delete req.url.method
      req.data = req.url
      req.url = `${API_SERVER.screenUrl}${url}`
    } else {
      if (sessionStorage.getItem('UserId') && !req.headers['x-auth-token']) {
        req.headers['x-auth-token'] = sessionStorage.getItem('UserId')
      }
      url = req.url.method
      delete req.url.method
      req.data = req.url
      req.url = `${API_SERVER.default}${url}`
    }
  }
  return req
}), err => {
  return Promise.reject(err)
}

// 响应拦截器
axios.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response) {
    if (err.response.status === 401) {
      if (sessionStorage.getItem('returnUrl')) {
        window.open(sessionStorage.getItem('returnUrl'), '_self')
      } else {
        sessionStorage.clear()
        router.push({ name: 'LOGIN' })
      }
      if (show) {
        Vue.prototype.$message.error(err.response.data.message)
        show = false
      }
    } else {
      if (err.response.data.message) {
        Vue.prototype.$message.error(err.response.data.message)
      } else {
        Vue.prototype.$message.error('接口调用出错')
      }
    }
  }
  return Promise.reject(err)
})

export default axios
