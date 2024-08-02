module.exports = {

  friendlyName: 'Get paging',

  description: '',

  inputs: {
    page: {
      type: 'number',
      example: 1,
      description: '页数',
      required: true,
    },
    perPage: {
      type: 'number',
      example: 30,
      description: '每页数据数',
      required: true,
    },
  },

  exits: {
    success: {
      outputFriendlyName: 'Paging',
    },

  },

  async fn({ page, perPage }) {
    return {
      page,
      perPage,
    };
  },

};
