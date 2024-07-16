const secretConfig = require("./config.secret");

module.exports = () => {
  const config = (exports = {});

  config.logger = {
    consoleLevel: "DEBUG",
    allowDebugAtProd: true,
  };

  exports.jwt = secretConfig.jwt;

  config.keys = secretConfig.keys;

  config.cluster = {
    listen: {
      port: "9293",
    },
  };

  config.multiavatar_key = secretConfig.multiavatar_key;

  config.sequelize = {
    dialect: "sqlite",
    storage: "../data.db",
  };

  return {
    ...config,
  };
};
