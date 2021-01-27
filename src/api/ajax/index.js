/* 能 发 送 ajax
请 求 的 函 数 模 块
包 装 axios 函 数 的 返 回 值 是 promise 对 象
axios.get()/post() 返 回 的 就 是 promise对 象
返 回 自 己 创 建 的 promise对 象 :
统 一 处 理 请 求 异 常
异 步 返 回 结 果 数 据 ,
而 不 是 包 含 结 果 数 据 的 response
*/
import axios from 'axios'

import {message} from 'element-ui'

// 当前运行的后台的初始化地址
const BASE = process.env.REACT_APP_BASE_URL
// const BASE = 'https://12.147.178:7072'

export default function ajax(url, data = {}, method = 'GET') {
  // eslint-disable-next-line no-unused-vars
  return new Promise(function (resolve, reject) {
    let promise
    // 执行 ajax 请求
    if (method === 'GET') {
      promise = axios.get(BASE + url, {params: data}) // params 配置指定的query参数
    } else {
      promise = axios.post(BASE + url, data)
    }
    // 统一处理返回值
    promise.then(response => {
      // 如果请求成功，调用 resovle
      resolve(response.data)
    }).catch(error => {
      // 统一处理失败，外面调用时候就不用在 catch 了
      // 直接提示请求失败，不调用 reject 了
      message.error('请求错误:' + error.message)
    })
  })
    
}
