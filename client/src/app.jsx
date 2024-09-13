import React, { useState } from "react";

import {
  f7ready,
  App,
  Views,
  View,
  Toolbar,
  Link,
  LoginScreen,
  LoginScreenTitle,
  Page,
} from "framework7-react";

import axios from "axios";
import routes from "./js/routes";
import store from "./js/store";
import { ws } from "./common/io/socket";
import { http } from "./common/io/io";
import style from "./style.module.css";

const MyApp = () => {
  const [loginScreenOpened, setLoginScreenOpened] = useState(true);
  const f7params = {
    name: "Ollah", // App name
    theme: "auto", // Automatic theme detection
    colors: {
      primary: "#50C3A0",
    },

    // App store
    store,
    // App routes
    routes,
  };

  f7ready(async () => {
    // 初始化Http请求配置
    const { data } = await axios.get("/api/setting");
    console.log(data);
    http.initial({
      baseURL: "/api",
    });
    // Socket链接
    // ws.init();
    setTimeout(() => {
      setLoginScreenOpened(false);
    }, 2000);
  });

  return (
    <App {...f7params}>
      {/* Views/Tabs container */}
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        <Toolbar tabbar icons bottom>
          <Link
            tabLink="#view-home"
            tabLinkActive
            iconIos="f7:house_fill"
            iconMd="material:home"
            text="Home"
          />
          <Link
            tabLink="#view-dashboard"
            iconIos="f7:square_list_fill"
            iconMd="material:view_list"
            text="dashboard"
          />
          <Link
            tabLink="#view-settings"
            iconIos="f7:gear"
            iconMd="material:settings"
            text="Settings"
          />
        </Toolbar>

        {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
        <View id="view-home" main tab tabActive url="/" />

        {/* Catalog View */}
        <View id="view-dashboard" name="dashboard" tab url="/dashboard/" />

        {/* Settings View */}
        <View id="view-settings" name="settings" tab url="/settings/" />
      </Views>

      <LoginScreen
        className="demo-login-screen"
        opened={loginScreenOpened}
        onLoginScreenClosed={() => {
          setLoginScreenOpened(false);
        }}
      >
        <Page loginScreen>
          <LoginScreenTitle>Luanching...</LoginScreenTitle>
          <div className="flex justify-center">
            <div className={style.loader} />
          </div>
        </Page>
      </LoginScreen>
    </App>
  );
};
export default MyApp;
