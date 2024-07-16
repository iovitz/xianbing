const secretConfig = require("./config.secret");

module.exports = () => {
  const config = (exports = {});

  config.multiavatar_key = secretConfig.multiavatar_key;

  config.keys = secretConfig.keys;

  config.keys = secretConfig.keys;

  config.sequelize = {
    dialect: "sqlite",
    storage: "path/to/database.sqlite",
  };

  return {
    ...config,
  };
};
