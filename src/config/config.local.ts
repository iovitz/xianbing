import { MidwayConfig } from '@midwayjs/core';

const env = process.env;

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1725357130916_6038',
  koa: {
    port: 13131,
  },
  typeorm: {
    defaultDataSourceName: 'mysql',
    dataSource: {
      mysql: {
        host: env.DB_MYSQL_HOST,
        port: Number(env.DB_MYSQL_PORT),
        username: env.DB_MYSQL_USER,
        password: env.DB_MYSQL_PASSWORD,
        database: env.DB_MYSQL_DB_NAME,
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: true,
        // 配置实体模型
        entities: ['entity'],
        migrations: ['migration'],
      },
    },
  },
  sequelize: {
    dataSource: {
      // 第一个数据源，数据源的名字可以完全自定义
      default: {
        database: env.DB_MYSQL_DB_NAME,
        username: env.DB_MYSQL_USER,
        password: env.DB_MYSQL_PASSWORD,
        host: env.DB_MYSQL_HOST,
        port: Number(env.DB_MYSQL_PORT),
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
    key: env.MULTIAVATAR_KEY,
  },
  midwayLogger: {
    default: {
      level: 'debug',
    },
  },
} as MidwayConfig;
