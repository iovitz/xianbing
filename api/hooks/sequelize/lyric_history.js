const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class LyricHistory extends Model {
    static associate() {
    }
  }
  LyricHistory.init({
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
    name: {
      field: 'name',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lyricId: {
      field: 'lyric_id',
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'Lyric',
        key: 'id',
      },
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'lyric_history',
    sequelize,
  });
};
