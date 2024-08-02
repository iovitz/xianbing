/**
 * EcryptService
 *
 * @description :: 负责处理一些字符串加密逻辑
 * @usage       :: EcryptService.[methodName]()
 */

const Pako = require('pako');

const Service = {

  ungzip(gzipBase64Str) {
    return JSON.parse(Pako.ungzip(Buffer.from(gzipBase64Str, 'base64'), { to: 'string' }));
  },

  gzip(data) {
    return this.strToGzipBase64(JSON.stringify(data));
  },

  strToGzipBase64(str) {
    return Buffer.from(pako.gzip(str, { level: 9 })).toString('base64');
  },
};

module.exports = Service;
