/**
 * Pagination.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    page: {
      type: 'number',
      example: '1',
      description: '页数',
      allowNull: false,
    },
    per_page: {
      type: 'number',
      example: '30',
      description: '每页数据数',
      allowNull: false,
    },
  },

};
