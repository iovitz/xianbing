import { MidwayConfig, Session } from '@midwayjs/core';
import { UserProfile } from '../entity/user-profile.entity';
import { User } from '../entity/user.entity';

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
  typeorm: {
    defaultDataSourceName: 'mysql',
    dataSource: {
      mysql: {
        type: 'mysql',
        host: env.DB_MYSQL_HOST,
        port: 3306,
        username: env.DB_MYSQL_USER,
        password: env.DB_MYSQL_PASSWORD,
        database: env.DB_MYSQL_DB_NAME,
        // synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: true,

        // 配置实体模型
        entities: [User, Session, UserProfile],
      },
    },
  },
  midwayLogger: {
    default: {
      level: 'debug',
    },
  },
} as MidwayConfig;
