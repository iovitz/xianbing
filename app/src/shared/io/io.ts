import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios'
import { FeSocket } from './socket'

type ErrorHandler = (data: unknown) => unknown

export class HttpClient {
  socket!: FeSocket

  axios!: AxiosInstance

  errorHandler = new Set<ErrorHandler>()

  initial(config: CreateAxiosDefaults) {
    this.axios = axios.create(config)

    this.axios.interceptors.response.use(({ data }) => data)
    return this
  }

  addErrorHandler(handler: ErrorHandler) {
    this.errorHandler.add(handler)
  }

  removeErrorHandler(handler: ErrorHandler) {
    this.errorHandler.delete(handler)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request<T = any>(config: AxiosRequestConfig) {
    return this.axios.request(config).catch(e => {
      this.errorHandler.forEach(fn => fn(e))
      throw e
    }) as unknown as Promise<T>
  }
}

export const http = new HttpClient()
