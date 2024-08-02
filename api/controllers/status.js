module.exports = {

  friendlyName: '{{friendlyName}}',

  description: '{{name}}',

  inputs: {
    // name: {
    //   type: 'string',
    //   example: 'zhangsan',
    //   description: 'username',
    //   required: true,
    //   custom() {
    //     return true;
    //   },
    // },
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
    exits.badRequest('niubi');
  },

};
