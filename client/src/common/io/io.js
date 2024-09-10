import axios from "axios";
import WebSocket from "./socket";

class IO {
  socket;

  axios;

  errorHandler = new Set();

  constructor(config) {
    const { socketConfig } = config;
    if (socketConfig) {
      this.socket = new WebSocket(
        socketConfig.socketUrl,
        socketConfig.socketPath,
        socketConfig.socketAuth,
      );
    }
    this.axios = axios.create(config);
    this.addResponseInterceptor(({ data }) => data);
  }

  addErrorHandler(handler) {
    this.errorHandler.add(handler);
  }

  removeErrorHandler(handler) {
    this.errorHandler.delete(handler);
  }

  addResponseInterceptor(interceptor) {
    this.axios.interceptors.response.use(interceptor);
  }

  addRequestInterceptor(interceptor) {
    this.axios.interceptors.request.use(interceptor);
  }

  request(config) {
    return this.axios.request(config).catch((e) => {
      this.errorHandler.forEach((fn) => fn(e));
      throw e;
    });
  }

  onMessage(...args) {
    this.socket.connection.on(...args);
  }

  sendMessage(...args) {
    this.socket.connection.off(...args);
  }

  watch() {
    this.socket.connect();
  }

  unwatch() {
    this.socket.disconnect();
  }
}

const io = new IO({
  baseURL: "/api",
});
export default io;
