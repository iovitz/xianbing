const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Voice extends Model {
  }
  Voice.init({
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
    voiceUrl: {
      field: 'voice_url',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    authorId: {
      field: 'author_id',
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
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
    // 播放次数
    playCount: {
      field: 'play_count',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'voice',
    sequelize,
  });
};
