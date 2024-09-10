import SocketClient from "socket.io-client";

// Socket V2文档：https://socket.io/zh-CN/docs/v2/client-initialization/
class WebSocket {
  isConnected = false;

  eventQueue = [];

  connection;

  get memberId() {
    return this.connection.id ?? null;
  }

  constructor(url, path, auth) {
    this.connection = SocketClient(url, {
      path,
      query: {
        room: "demo",
        userId: `client_${auth}`,
      },
      transports: ["websocket", "polling"],
      timeout: 5000,
      // 取消自动连接
      autoConnect: false,
    });
    this.initEvents();
  }

  initEvents() {
    this.connection.on("connect", () => {
      if (!this.connection) return;
      const { id } = this.connection;

      console.info("Socket链接成功", id);
      this.isConnected = true;
    });

    // 连接出错
    this.connection.on("connect_error", (error) => {
      console.error("Socket连接失败", error);
      this.isConnected = false;
    });

    // 断线
    this.connection.on("disconnect", (msg) => {
      console.error("Socket断开连接", msg);
      this.isConnected = false;
    });
  }

  connect() {
    this.connection.connect();
  }

  disconnect() {
    this.connection.disconnect();
  }
}

export default WebSocket;
