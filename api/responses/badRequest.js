const statuses = require('statuses');

module.exports = function (err, customCode) {
  const code = customCode ?? 40000;
  const message = _.get(err, 'message');
  return this.res.status(400).send({
    code,
    msg: message || statuses(400),
  });
};
