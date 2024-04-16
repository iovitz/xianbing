const CryptoJS = require("crypto-js");

module.exports = () => {
  const config = (exports = {});

  // 免费数据库
  exports.sequelize = {
    dialect: "mysql",
    database: "duuk_book_prod",
    host: "mysql.sqlpub.com",
    port: 3306,
    username: "duuk_book_prod",
    password: CryptoJS.AES.decrypt("U2FsdGVkX1+SOUbpnfavlUCqPaC66NcYqtt6SGGtRKo0udbZgsInAFXRYVfUqUL3", "").toString(CryptoJS.enc.Utf8),
  };

  return {
    ...config,
  };
};
