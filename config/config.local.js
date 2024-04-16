const CryptoJS = require("crypto-js");

module.exports = () => {
  const config = (exports = {});

  config.logger = {
    consoleLevel: "DEBUG",
    allowDebugAtProd: true,
  };

  exports.sequelize = {
    dialect: "mysql",
    database: "duuk_book_dev",
    host: "mysql.sqlpub.com",
    port: 3306,
    username: "duuk_book_dev",
    password: CryptoJS.AES.decrypt("U2FsdGVkX19JY1VzI8bzi3U/fcTzxPPgJB8fTw0kYK4BBCW3VfIeyG1scweJnjd7", "").toString(CryptoJS.enc.Utf8),
  };

  return {
    ...config,
  };
};
