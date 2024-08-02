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
      description: '昵称',
      required: true,
      allowNull: false,
    },
    per_page: {
      type: 'number',
      example: '1',
      description: '昵称',
      required: true,
      allowNull: false,
    },
  },

};
