module.exports = () => {
  return async function (ctx, next) {
    // todo: 通过IP做限制
    await next();
  };
};
