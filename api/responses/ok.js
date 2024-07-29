module.exports = function (optionalData, status = 200) {
  Tracer.info(this.req, '请求完成');
  return this.res.status(status).send({
    code: 0,
    data: optionalData,
    msg: 'success',
  });
};
