/**
 * get-paging helper
 *
 * @description :: 从Query参数中获取分页配置
 * @usage       :: await sails.helpers.request.getPaging.with({})
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

  async fn(inputs, exits) {
    const data = 'get-paging';

    return exits.success(data);
  },

};
