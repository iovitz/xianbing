const CryptoJS = require("crypto-js");

module.exports = () => {
  const config = (exports = {});

  // https://www.sojson.com/encrypt_aes.html
  const password = "U2FsdGVkX1+SOUbpnfavlUCqPaC66NcYqtt6SGGtRKo0udbZgsInAFXRYVfUqUL3";

  config.multiavatar_key = "icklZBjWuCEbMm";

  exports.sequelize = {
    dialect: "mysql",
    database: "duuk_book_prod",
    host: "mysql.sqlpub.com",
    port: 3306,
    username: "duuk_book_prod",
    password: CryptoJS.AES.decrypt(password, "").toString(CryptoJS.enc.Utf8),
    timezone: "+08:00",
    define: {
      timestamps: true, // 添加create,update,delete时间戳
      freezeTableName: true, // 防止修改表名为复数
      deletedAt: false,
      updatedAt: "updated_at",
      createdAt: "created_at",
    },
    // 打印日志
    logging: false,
  };

  return {
    ...config,
  };
};
