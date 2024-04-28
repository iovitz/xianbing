/**
 * gzip解压
 */
module.exports = () => {
  return async (ctx, next) => {
    ctx.payload = ctx.service.code.ungzip(ctx.packet[1]);
    await next();
  };
};
