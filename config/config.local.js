const CryptoJS = require("crypto-js");

module.exports = () => {
  const config = (exports = {});

  config.logger = {
    consoleLevel: "DEBUG",
    allowDebugAtProd: true,
  };

  exports.sequelize = {
    dialect: "mysql",
    database: "duke_store_dev",
    host: "mysql.sqlpub.com",
    port: 3306,
    username: "duke_store_dev",
    password: CryptoJS.AES.decrypt("U2FsdGVkX1/EAwFCcXF+OFwEnMbMWEt17mOjz8CZPn02oAzgC2ZXkAa2hwKX5myX", "").toString(CryptoJS.enc.Utf8),
  };

  return {
    ...config,
  };
};
