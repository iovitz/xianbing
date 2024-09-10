import { MidwayConfig } from '@midwayjs/core';
import { Session } from '../entity/session.entity';
import { UserProfile } from '../entity/user-profile.entity';
import { User } from '../entity/user.entity';

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
