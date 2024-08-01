module.exports = {

  friendlyName: '<API Name>',

  description: '<API Description>',

  inputs: {
    email: {
      type: 'string',
      example: 'iovitz@qq.com',
      description: '邮箱，用于登录',
      required: true,
      custom() {
        return true;
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
    exits.ok(input);
  },

};
