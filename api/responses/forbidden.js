const statuses = require('statuses');

module.exports = function (err) {
  const code = _.get(err, 'code');
  const message = _.get(err, 'message');
  return this.res.status(403).send({
    code: code || 40003,
    msg: message || statuses(403),
  });
};
