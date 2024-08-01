const statuses = require('statuses');

module.exports = function (err, customCode) {
  const code = customCode ?? 40000;
  const message = err instanceof Error ? _.get(err, 'message') : err;
  return this.res.status(400).send({
    code,
    msg: message || statuses(400),
  });
};
