import { Provide } from '@midwayjs/core';
import * as svgCaptcha from 'svg-captcha';
import * as dayjs from 'dayjs';
import { Context } from 'vm';

@Provide()
export class VerifyService {
  constructor(private ctx: Context) {}
  getVerifyCode(width: number, height: number, length = 4) {
    return svgCaptcha.create({
      size: length, // 验证码长度
      ignoreChars: 'o01ijlaqf', // 忽略字符
      color: false, // 是否采用彩色字符串
      noise: Math.floor(Math.random() * 3), // 干扰线条
      width, // 图片宽
      height, // 图片长
    });
  }

  checkVerifyCode(session: Record<string, string>, type: string, text: string) {
    // 获取验证码
    const code = session[`#c_${type}`] ?? '';
    const codeTime = session[`#t_${type}`] ?? '';
    // 判断验证码是不是30Min内下发的
    if (dayjs(codeTime).add(30, 'M') < dayjs(Date.now())) {
      this.ctx.logger.warn('验证码过期', codeTime);
      return false;
    }
    if (text.toLowerCase() !== code.toLowerCase()) {
      this.ctx.logger.warn('验证码校验失败', {
        input: text.toLowerCase(),
        right: code.toLowerCase(),
      });
      return false;
    }
    delete session[`#c_${type}`];
    delete session[`#t_${type}`];
    return true;
  }
}
