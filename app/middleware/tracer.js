const { customAlphabet } = require("nanoid");

module.exports = () => {
  const traceIdGenerator = customAlphabet("0123456789", 9);
  return async function (ctx, next) {
    const traceId = ctx.get("trace-id") ?? traceIdGenerator() + Date.now();
    ctx.tracer = {
      traceId,
    };
    ctx.logger.info(
      `收到请求`,
      !ctx.isProd &&
        JSON.stringify({
          body: ctx.$body,
          query: ctx.$query,
          params: ctx.$params,
        }),
    );

    await next();
    ctx.set("trace-id", traceId);

    ctx.logger.info(`完成请求`);
  };
};
