const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    field: 'name',
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  age: {
    field: 'age', // 自定义字段名称及数据表中对应字段
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },
});
