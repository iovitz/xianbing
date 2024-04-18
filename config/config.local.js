const CryptoJS = require("crypto-js");

module.exports = () => {
  const config = (exports = {});

  config.logger = {
    consoleLevel: "DEBUG",
    allowDebugAtProd: true,
  };

  // https://www.sojson.com/encrypt_aes.html
  const password = "U2FsdGVkX19JY1VzI8bzi3U/fcTzxPPgJB8fTw0kYK4BBCW3VfIeyG1scweJnjd7";

  exports.sequelize = {
    dialect: "mysql",
    database: "duuk_book_dev",
    host: "mysql.sqlpub.com",
    port: 3306,
    username: "duuk_book_dev",
    password: CryptoJS.AES.decrypt(password, "").toString(CryptoJS.enc.Utf8),
    timezone: "+08:00",
    define: {
      timestamps: true, // 添加create,update,delete时间戳
      freezeTableName: true, // 防止修改表名为复数
    },
    // 打印日志
    logging: false,
  };

  return {
    ...config,
  };
};
