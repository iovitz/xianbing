import { MidwayConfig } from '@midwayjs/core';
import { Session } from '../entity/session.mysql';
import { UserProfile } from '../entity/user-profile.mysql';
import { User } from '../entity/user.mysql';

export default {
  keys: 'UNI_TEST_KEY',
  koa: {
    port: 7001,
  },
  typeorm: {
    defaultDataSourceName: 'mysql',
    dataSource: {
      mysql: {
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: [User, Session, UserProfile],
      },
    },
  },
} as MidwayConfig;
