// Import React and ReactDOM
import React from "react";
import { createRoot } from "react-dom/client";

// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Import Framework7-React Plugin
import Framework7React from "framework7-react";

// Import Framework7 Styles
import "framework7/css/bundle";

// Import Icons and App Custom Styles
import "../css/tailwind.css";
import "../css/icons.css";
import "../css/app.scss";
import "../css/theme.css";

// Import App Component
import App from "../app.jsx";
import { http } from "@/common/io/io";
import { ws } from "@/common/io/socket";

// Init F7 React Plugin
Framework7.use(Framework7React);

// 初始化Http请求配置
http.initial({
  baseURL: "/api",
});
// Socket链接
ws.init();

// Mount React App
const root = createRoot(document.getElementById("app"));
root.render(React.createElement(App));
