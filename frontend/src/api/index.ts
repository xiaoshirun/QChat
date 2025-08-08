import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义响应数据类型
interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

class ApiClient {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.setupInterceptors()
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
        (config) => {
          // 可以在这里添加token等
          const token = localStorage.getItem('token')
          if (token) {
            config.headers.Authorization = `Bearer ${token}`
          }
          return config
        },
        (error) => {
          return Promise.reject(error)
        }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
        (response: AxiosResponse<ApiResponse>) => {
          // 处理响应数据
          if (response.data.code !== 200) {
            return Promise.reject(response.data.message)
          }
          return response.data.data
        },
        (error) => {
          // 处理错误
          return Promise.reject(error)
        }
    )
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }

  // 可以添加更多方法...
}

// 创建实例
const apiClient = new ApiClient({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000
})

export default apiClient
