module.exports = () => {
  const config = {};

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.logger = {
    consoleLevel: "DEBUG",
    allowDebugAtProd: true,
  };

  config.jwt = {
    secret: "wNCj-FMP9Q",
    expiresIn: "30d",
  };

  config.keys = "BeEby5uY6xRRueJxFHfv9";
  config.multiavatar_key = "cseDKi8S9hnyRa";

  config.cluster = {
    listen: {
      port: "9293",
    },
  };

  config.sequelize = {
    dialect: "sqlite",
    // 工作目录是根目录，不是config文件所在目录
    storage: "./data.db",
  };

  return {
    ...config,
  };
};
