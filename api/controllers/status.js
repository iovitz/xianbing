/**
 * status action
 *
 * @description :: 获取服务运行状态
 * @usage       :: 'GET /api/v1/status': { action: 'status' },
 */

module.exports = {

  inputs: {
    // name: {
    //   type: 'string',
    //   example: 'zhangsan',
    //   description: 'Someone\'s name',
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
    exits.ok('Running');
  },

};
