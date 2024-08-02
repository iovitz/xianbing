module.exports = {

  friendlyName: 'Register',

  description: 'Register auth.',

  inputs: {
    nickname: {
      type: 'string',
      example: 'Zhangsan',
      description: '昵称',
      required: true,
    },
    email: {
      type: 'string',
      example: 'iovitz@qq.com',
      description: '邮箱，用于登录',
      required: true,
      custom() {
        return true;
      },
    },
    password: {
      type: 'string',
      example: '123456',
      description: '登录密码',
      required: true,
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
    const { req } = this;
    const paging = await sails.helpers.request.getPaging.with(req.query);

    return exits.badRequest(paging);
  },

};
