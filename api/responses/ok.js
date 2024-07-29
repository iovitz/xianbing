module.exports = function (optionalData, status = 200) {
  sails.log.info('请求完成');
  return this.res.status(status).send({
    code: 0,
    data: optionalData,
    msg: 'success',
  });
};
