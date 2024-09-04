import { MidwayConfig } from '@midwayjs/core';

const env = process.env;

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1725357130916_6038',
  koa: {
    port: 13131,
    contextLoggerFormat: info => {
      const ctx = info.ctx;
      return `${info.LEVEL} ${ctx.traceId ?? ''} ${info.message}`;
    },
  },
  db: {
    mysql: {
      host: env.DB_MYSQL_HOST,
      dbName: env.DB_MYSQL_DB_NAME,
      user: env.DB_MYSQL_USER,
      // 用 `encrypt.aes` 进行AES加密之后的password，避免明文展示密码
      password: env.DB_MYSQL_PASSWORD,
    },
  },
  midwayLogger: {
    default: {
      level: 'debug',
    },
  },
} as MidwayConfig;
