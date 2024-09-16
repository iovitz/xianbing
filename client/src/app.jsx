import React, { useState, useEffect } from "react";

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

import routes from "./js/routes";
import store, { USER_STORE_KEY } from "./js/store";
// import { ws } from "./common/io/socket";
import { http } from "./common/io/io";
import style from "./style.module.css";
import LS from "./common/local-storage/local-storage";
import { logger } from "./common/logger/logger";

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
  http.initial({
    baseURL: "/api",
  });
  // Socket链接
  // ws.init();

  useEffect(() => {
    http
      .request({
        method: "get",
        url: "/setting",
      })
      .then((data) => {
        store.dispatch("setSetting", data);
      });

    try {
      // 持久化存储的内容
      const userInfo = LS.getItem(USER_STORE_KEY);
      store.dispatch("setUser", JSON.parse(userInfo));
    } catch (e) {
      store.dispatch("setUser", {});
      logger.error("Get User Info Fail");
    }

    setTimeout(() => {
      setLoginScreenOpened(false);
    }, 2000);
    return () => {};
  }, []);
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
