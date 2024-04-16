"use strict";

module.exports = (app) => {
  const { router, controller, middleware } = app;
  // const { io } = app;
  const { home } = controller;

  // Socket.IO
  // io.route("chat", io.controller.chat.ping);

  // 普通请求
  const homeRouter = router.namespace("/api");
  registerRouter(homeRouter, "get", "/status", home.getStatus);

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
