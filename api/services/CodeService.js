const moment = require('moment');
const Pako = require('pako');
const svgCaptcha = require('svg-captcha');

module.exports = {
  ungzip(gzipBase64Str) {
    return JSON.parse(Pako.ungzip(Buffer.from(gzipBase64Str, 'base64'), { to: 'string' }));
  },

  gzip(data) {
    return this.strToGzipBase64(JSON.stringify(data));
  },

  strToGzipBase64(str) {
    return Buffer.from(pako.gzip(str, { level: 9 })).toString('base64');
  },

  getVerifyCode(width, height, length = 4) {
    return svgCaptcha.create({
      size: length, // 验证码长度
      ignoreChars: 'o01ijlaqf', // 忽略字符
      color: false, // 是否采用彩色字符串
      noise: Math.floor(Math.random() * 3), // 干扰线条
      width, // 图片宽
      height, // 图片长
    });
  },

  checkVerifyCode(field, text) {
    // 获取验证码
    const { ctx } = this;
    const code = ctx.session[`#c_${field}`] ?? '';
    const codeTime = ctx.session[`#t_${field}`] ?? '';
    if (moment(codeTime).add(30, 'M') < moment(Date.now())) {
      return ctx.throw(422, '验证码过期');
    }
    if (text.toLowerCase() !== code.toLowerCase()) {
      ctx.logger.warn('验证码校验失败', {
        input: text.toLowerCase(),
        right: code.toLowerCase(),
      });
      return ctx.throw(422, '验证码错误');
    }
    delete ctx.session[`#c_${field}`];
    delete ctx.session[`#t_${field}`];
    return true;
  },
};
