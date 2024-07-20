"use strict";

module.exports = (app) => {
  const { router, controller, middleware } = app;
  const { io } = app;
  const { home, service, user, songWords } = controller;

  // Socket.IO
  io.of("/duuk").route("chat", io.controller.chat.ping);

  // 普通请求
  const homeRouter = router.namespace("/api");
  registerRouter(homeRouter, "get", "/status", home.getStatus);

  const userRouter = router.namespace("/api/user");
  registerRouter(userRouter, "post", "/register", user.register);
  registerRouter(userRouter, "post", "/login", user.login);

  const songWordsRouter = router.namespace("/api/song_words");
  registerRouter(songWordsRouter, "get", "/", songWords.getSongWords);
  registerRouter(songWordsRouter, "post", "/upload", songWords.uploadWords, {
    auth: true,
  });

  const serviceRouter = router.namespace("/api/service");
  registerRouter(serviceRouter, "get", "/verify-code", service.getVerifyCode);

  function registerRouter(router, method, path, fn, config = {}) {
    const middlewares = [middleware.tracer(app), middleware.access(app), middleware.errorHandler(app), middleware.gzip(app)];

    config.auth && middlewares.unshift(middleware.auth(app));
    router[method](path, ...middlewares, fn);
  }
};
