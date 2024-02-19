import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios'
// import { logInfo, redLog, blackLog } from '@/utils'
// 创建一个实例，此后都在此实例上改造
const http = axios.create({
  // timeout: 1000 * 4,
  headers: {
    'content-type': 'application/json;charset=UTF-8'
    // 'Access-Control-Allow-Headers': 'AuthToken, Authorization, Origin, Content-Type, Accept, X-Requested-With'
  },
  withCredentials: false
})
// 请求拦截器
const beforeRequest = (config: AxiosRequestConfig) => {
  // 设置 token
  const token = localStorage.getItem('token')
  if (config.headers) {
    token && (config.headers.Authorization = token)
    // NOTE  添加自定义头部
    // config.headers['my-header'] = 'jack'
  }

  return config as InternalAxiosRequestConfig
}

http.interceptors.request.use(beforeRequest)

// 响应拦截器
const responseSuccess = (response: AxiosResponse) => {
  // eslint-disable-next-line yoda
  // 这里没有必要进行判断，axios 内部已经判断
  // const isOk = 200 <= response.status && response.status < 300
  return Promise.resolve(response.data)
}

const responseFailed = (error: AxiosError) => {
  const { response } = error
  if (response) {
    // handleError(response)
    // logInfo(response)
    // cons error = new Error(response.data.msg)
    return Promise.reject()
  } else if (!window.navigator.onLine) {
    // redLog('没有网络')
    return Promise.reject(new Error('请检查网络连接'))
  }
  return Promise.reject(error)
}
http.interceptors.response.use(responseSuccess, responseFailed)
// import { MessageBox } from 'element-ui'
import { ElMessage, ElMessageBox } from 'element-plus'
const post = (url: string, params: any, confirm: { confirm: any } | null | undefined) => {
  return new Promise((resolve, reject) => {
    if (confirm && confirm.confirm) {
      ElMessageBox.confirm(confirm.confirm || '确认操作吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          resolve(OnSuccess(http.post(url, params)))
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: 'Delete canceled'
          })
        })
    } else {
      resolve(http.post(url, params))
    }
  })
}
// 过滤数据
const OnSuccess = (promise: Promise<any>) => {
  return new Promise((resolve, reject) => {
    promise.then((res) => {
      resolve(res.data)
    })
  })
}

export default {
  post
}
