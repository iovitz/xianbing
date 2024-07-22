const { nanoid } = require("nanoid");

module.exports = () => {
  return async function (ctx, next) {
    const tid = nanoid();
    ctx.tracer = {
      traceId: tid,
    };
    ctx.logger.info(`收到请求`, {
      body: ctx.$body,
      query: ctx.$query,
      params: ctx.$params,
    });

    await next();

    ctx.logger.info(`完成请求`);
  };
};
