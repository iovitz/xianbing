module.exports = (app) => {
  const { isProd } = app;
  return async function notFoundHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      if (!err) {
        ctx.serverError();
        ctx.logger.error("###服务器内部错误");
        return;
      }
      const { status, code } = err;

      // 422客户端参数错误
      if (status === 422) {
        if (!isProd) {
          ctx.logger.warn("参数校验失败", JSON.stringify(err.errors));
        }
        return ctx.paramsError(err.errors ?? err.message);
      }
      ctx.logger.error("###服务器内部错误", err);

      const message = status === 500 && isProd ? "Internal Server Error" : (err.message ?? err.msg);

      return ctx.serverError(message, typeof status === "number" ? status : 500, typeof code === "number" ? code : 50000);
    }
  };
};
