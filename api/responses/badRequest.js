/**
 * badRequest response
 *
 * @description :: 错误请求
 * @usage       ::
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'badRequest'
 *       }
 *     }
 * ```
 */

const statuses = require('statuses');

module.exports = function (err) {
  const code = _.get(err, 'code');
  const message = _.get(err, 'message');
  return this.res.status(404).send({
    code: code || 40004,
    msg: message || statuses(404),
  });
};
