import axios from "axios";

export class HttpClient {
  socket;

  axios;

  errorHandler = new Set();

  initial(config) {
    this.axios = axios.create(config);

    this.addResponseInterceptor(({ data }) => data);
    return this;
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

export const http = new HttpClient();
