import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { IOConfig } from "./types";
import WebSocket from "./socket";
import { InferParamaters } from "@/common/types/utils";

class IO {
  socket: WebSocket;

  axios: AxiosInstance;

  errorHandler = new Set<(err: AxiosError) => void>();

  constructor(config: IOConfig) {
    const { socketConfig } = config;
    this.socket = new WebSocket(
      socketConfig.socketUrl,
      socketConfig.socketPath,
      socketConfig.socketAuth,
    );
    this.axios = axios.create(config);
  }

  public addErrorHandler(handler: (err: AxiosError) => void) {
    this.errorHandler.add(handler);
  }

  public removeErrorHandler(handler: (err: AxiosError) => void) {
    this.errorHandler.delete(handler);
  }

  public addResponseInterceptor(
    interceptor: (res: AxiosResponse) => AxiosResponse<unknown, unknown>,
  ) {
    this.axios.interceptors.response.use(interceptor);
  }

  public addRequestInterceptor(
    interceptor: (
      value: InternalAxiosRequestConfig<unknown>,
    ) => InternalAxiosRequestConfig<unknown>,
  ) {
    this.axios.interceptors.request.use(interceptor);
  }

  request<R = any>(config: AxiosRequestConfig<unknown>): any {
    return this.axios.request<R>(config).catch((e: AxiosError) => {
      this.errorHandler.forEach((fn) => fn(e));
      throw e;
    });
  }

  onMessage(...args: InferParamaters<typeof this.socket.connection.on>) {
    this.socket.connection.on(...args);
  }

  sendMessage(...args: InferParamaters<typeof this.socket.connection.off>) {
    this.socket.connection.off(...args);
  }

  watch() {
    this.socket.connect();
  }

  unwatch() {
    this.socket.disconnect();
  }
}
export default IO;
