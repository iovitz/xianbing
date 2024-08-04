/**
 * client-error helper
 *
 * @description :: 抛出客户端错误
 * @usage       :: await sails.helpers.response.clientError.with({})
 */

module.exports = {

  inputs: {
    message: {
      type: 'string',
      example: 'zhangsan',
      description: 'Error message',
      required: true,
      custom() {
        return true;
      },
    },
    code: {
      type: 'number',
      example: 40000,
      description: '错误码（Body中的细分错误码）',
      required: true,
      custom() {
        return true;
      },
    },
    statusCode: {
      type: 'number',
      example: 400,
      description: '格式为4XX的Http状态码',
      required: true,
      custom() {
        return true;
      },
    },
  },

  async fn(inputs, exits) {
    throw error;
  },

};
