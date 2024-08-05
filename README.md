# duuk-server

## 准备`config/local.js`文件

```js
/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system.
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */
module.exports = {

  // Any configuration settings may be overridden below, whether it's built-in Sails
  // options or custom configuration specifically for your app (e.g. Stripe, Sendgrid, etc.)

  secret: {
    // mysql.sqlpub.com申请的免费开发邮箱
    mysql: {
      host: 'mysql.sqlpub.com',
      dbName: 'duuk_server',
      user: 'duuk_server',
      // 用下面的 `encrypt.aes` 进行AES加密之后的password，避免明文展示密码
      aesPassword: 'U2FsdGVkX1+prMWzXmqIsNyV1X4svmDjqhTvHKZbGiQAK2D/w6M76fbEVsHqWlY1',
    },

    // https://multiavatar.com/ 申请的头像Key
    multiavatar: {
      secretKey: 'DZedWIB9UxGjm8',
    },

    encrypt: {
      // 随机生成的nanoid
      aes: 'D8a8c1Ff5tMtdoaZiqfbU',
    },
  },

  port: 5001,
};
```
