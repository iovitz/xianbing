// 放在服务器中
const secretConf = require("~/config/duuk-server.secret.json");

module.exports = () => {
  const config = {};

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.logger = {
    consoleLevel: "INFO",
    allowDebugAtProd: false,
    outputJSON: false,
  };

  config.jwt = {
    secret: secretConf["jwt-secret"],
    expiresIn: "30d",
  };

  config.keys = secretConf.keys;
  config.multiavatar_key = secretConf.multiavatar_key;

  config.cluster = {
    listen: {
      port: "9293",
    },
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: secretConf.redis.host, // Redis host
      password: secretConf.redis.password,
      db: secretConf.redis.db,
    },
  };

  config.sequelize = {
    dialect: "sqlite",
    // 工作目录是根目录，不是config文件所在目录
    storage: "./db/data.db",
  };

  return {
    ...config,
  };
};
