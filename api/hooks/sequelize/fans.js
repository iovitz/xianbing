const { DataTypes, Model } = require('sequelize');

module.exports = function (sequelize) {
  class Fans extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      this.belongsTo(models.User, { foreignKey: 'fans_id', as: 'fans' });
    }
  }

  Fans.init({
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id: {
      field: 'id',
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
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
  }, {
    tableName: 'fans',
    sequelize,
  });
};
