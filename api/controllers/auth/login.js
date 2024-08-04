/**
 * login action
 *
 * @description :: 用户登录
 * @usage       :: 'POST /api/v1/auth/login': { action: 'auth/login' },
 */

module.exports = {

  inputs: {
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
    // const isVerifyCodeRight = VerifyService.checkVerifyCode(this.req.session, 'register', input.code);
    // if (!isVerifyCodeRight) {
    //   return exits.badRequest('验证码错误');
    // }

    const existsUser = await AuthService.findUserByEmail(input.email);

    if (!existsUser || !EncryptService.comparePassword(input.password, existsUser.password)) {
      return exits.badRequest('账号或密码错误');
    }

    const [userProfile, sessionId] = await Promise.all([
      UserService.findUserProfileById(existsUser.id),
      AuthService.createSession(existsUser.id),
    ]);

    return exits.ok({
      ...UserService.getUserProfileInfo(userProfile),
      session: sessionId,
    });
  },

};
