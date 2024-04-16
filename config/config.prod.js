const CryptoJS = require("crypto-js");

module.exports = () => {
  const config = (exports = {});

  // 免费数据库
  exports.sequelize = {
    dialect: "mysql",
    database: "duke_store",
    host: "mysql.sqlpub.com",
    port: 3306,
    username: "duke_store",
    password: CryptoJS.AES.decrypt("U2FsdGVkX19QJa8ODR6pM1F0hGeNXv5WGTeiUlfmzPZyrJLMLCfKCQ3yltXqpbUg", "").toString(CryptoJS.enc.Utf8),
  };

  return {
    ...config,
  };
};
