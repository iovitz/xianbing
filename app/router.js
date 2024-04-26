"use strict";

module.exports = (app) => {
  const { router, controller, middleware } = app;
  const { io } = app;
  const { home, service } = controller;

  // Socket.IO
  io.of("/duuk").route("chat", io.controller.chat.ping);

  // 普通请求
  const homeRouter = router.namespace("/api");
  registerRouter(homeRouter, "get", "/status", home.getStatus);

  registerRouter(homeRouter, "get", "/service/verify-code", service.getVerifyCode);

  function registerRouter(router, method, path, fn, config = {}) {
    const configMiddlewares = [];

    const frontMiddlewares = [middleware.gzip(app), middleware.errorHandler(app)];
    // 放在Auth之后的中间件
    const rearMiddlewares = [middleware.access(app)];

    config.auth && configMiddlewares.push(middleware.auth(app));

    const middlewares = [...frontMiddlewares, ...configMiddlewares, ...rearMiddlewares];

    router[method](path, ...middlewares, fn);
  }
};
