module.exports = () => {
  return async (ctx, next) => {
    ctx.logger.info(ctx.socket.id);
    await next();
    ctx.logger.info("disconnection!");
  };
};
