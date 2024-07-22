module.exports = () => {
  const config = (exports = {});

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.jwt = {
    secret: "wNCj-FMP9Q",
    expiresIn: "30d",
  };

  config.keys = "BeEby5uY6xRRueJxFHfv9";
  config.multiavatar_key = "cseDKi8S9hnyRa";

  config.sequelize = {
    dialect: "sqlite",
    // 工作目录是根目录，不是config文件所在目录
    storage: "./data.db",

    logging: false,
  };

  return {
    ...config,
  };
};
