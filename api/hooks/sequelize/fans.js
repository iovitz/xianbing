const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define(
  'fans',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      field: 'user_id',
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    fansId: {
      field: 'fans_id',
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
    },
  },
);
