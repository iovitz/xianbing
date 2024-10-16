import { MidwayConfig } from '@midwayjs/core';

const env = process.env;
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: env.XIANBING_APP_COOKIE_KEY,
  koa: {
    port: Number(env.XIANBING_APP_PORT),
  },
  sequelize: {
    dataSource: {
      // 第一个数据源，数据源的名字可以完全自定义
      default: {
        database: env.XIANBING_DB_MYSQL_DB_NAME,
        username: env.XIANBING_DB_MYSQL_USER,
        password: env.XIANBING_DB_MYSQL_PASSWORD,
        host: env.XIANBING_DB_MYSQL_HOST,
        port: Number(env.XIANBING_DB_MYSQL_PORT),
        encrypt: false,
        dialect: 'mysql',
        define: { charset: 'utf8' },
        timezone: '+08:00',
        entities: ['mysql'],
        sync: true,
        repositoryMode: true,
      },
    },
  },
  multiAvatar: {
    key: env.XIANBING_MULTIAVATAR_KEY,
  },
} as MidwayConfig;
