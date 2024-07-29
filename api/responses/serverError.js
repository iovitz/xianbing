const statuses = require('statuses');

module.exports = function (err) {
  const code = _.get(err, 'code');
  const message = _.get(err, 'message');
  console.log(err);
  TracerService.error(this.res, '服务端内部错误', err);

  return this.res.status(500).send({
    code: code || 50000,
    msg: message || statuses(500),
  });
};
