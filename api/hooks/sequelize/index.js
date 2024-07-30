const { Sequelize } = require('sequelize');

module.exports = function defineSequelizeHook(sails) {
  // 配置连接参数
  const sequelize = new Sequelize('duuk_server', 'duuk_server', 'WC4CdduthwFTigRJ', {
    host: 'mysql.sqlpub.com',
    dialect: 'mysql',
    logging(sql) {
      sails.log.info(sql);
    },
  });

  require('./user')(sequelize);
  require('./lyric')(sequelize);
  require('./lyric_history')(sequelize);
  require('./voice')(sequelize);
  require('./fans')(sequelize);

  sails.mysql = sequelize.models;

  // await sequelize.sync(); // 同步模型和数据库

  return {

    /**
     * Runs when this Sails app loads/lifts.
     */
    async initialize() {
      // 开发环境下按需同步
      if (sails.config.environment === 'development') {
        // await sequelize.sync(); // 同步模型和数据库
      }
      sails.log.info('Initializing custom hook (`sequelize`)');
    },

  };
};
