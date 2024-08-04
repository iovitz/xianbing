/**
 * register action
 *
 * @description :: 用户注册
 * @usage       :: 'POST /api/v1/user/register': { action: 'user/register' },
 */

module.exports = {

  inputs: {
    nickname: {
      type: 'string',
      example: 'zhangsan',
      description: 'Someone\'s name',
      required: true,
      custom(v) {
        if (v.length < 2 || v.length > 10) {
          return false;
        }
        return true;
      },
    },
    email: {
      type: 'string',
      example: 'my@qq.com',
      description: 'Email',
      required: true,
      custom(v) {
        if (v.length > 30) {
          // 邮箱最多30位
          return false;
        }
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
    },
    password: {
      type: 'string',
      example: '123123',
      description: '字母开头的六到16位密码',
      required: true,
      custom(v) {
        return /^\w{6,16}$/.test(v);
      },
    },
    code: {
      type: 'string',
      example: 'aaaa',
      description: '验证码',
      required: true,
      custom(v) {
        return v.length === 4;
      },
    },
  },

  exits: {
    ok: {
      responseType: 'ok',
    },
    badRequest: {
      responseType: 'badRequest',
    },
  },

  async fn(input, exits) {
    // 校验验证码
    const isVerifyCodeRight = VerifyService.checkVerifyCode(this.req.session, 'login', input.code);
    if (!isVerifyCodeRight) {
      return exits.badRequest('验证码错误');
    }
    UserService.createUser();
    const data = 'success';

    return exits.ok(data);
  },

};
