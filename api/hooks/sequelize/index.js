const { Sequelize } = require('sequelize');

/**
 * sequelize hook
 *
 * @description :: 初始刷MySQL的Sequelize链接
 */

module.exports = function (sails) {
  // 配置连接参数
  const sequelize = new Sequelize('duuk_server', 'duuk_server', 'WC4CdduthwFTigRJ', {
    host: 'mysql.sqlpub.com',
    dialect: 'mysql',
    logging(sql) {
      sails.log.info(sql);
    },
    dialectOptions: {
      timezone: '+08:00',
    },
  });

  require('./user')(sequelize);
  require('./user_profile')(sequelize);
  require('./lyric')(sequelize);
  require('./lyric_history')(sequelize);
  require('./voice')(sequelize);
  require('./fans')(sequelize);
  require('./voice_history')(sequelize);

  sails.mysql = sequelize.models;

  return {

    /**
     * Runs when this Sails app loads/lifts.
     */
    async initialize() {
      // 开发环境下按需同步
      if (sails.config.environment === 'development') {
        await sequelize.sync(); // 同步模型和数据库
      }
      sails.log.info('Initializing custom hook (`sequelize`)');
    },

  };
};
