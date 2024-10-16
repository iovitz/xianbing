import { MidwayConfig } from '@midwayjs/core';
import { gray, red, yellow } from 'ansis';

const env = process.env;
export default {
  // use for cookie sign key, should change to your own and keep security
  koa: {
    port: Number(env.XIANBING_APP_PORT),
    contextLoggerFormat: info => {
      const ctx = info.ctx;
      return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(
        info.pid
      )} ${red(ctx.traceId ?? '')} ${info.message}`;
    },
  },

  // use for cookie sign key, should change to your own and keep security
  keys: env.XIANBING_APP_COOKIE_KEY,

  // database
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

  socketIO: {
    // ...
    transports: ['websocket'],
  },
  staticFile: {
    dirs: {
      default: {
        prefix: '/',
        dir: 'public',
        alias: {
          // '/': '/index.html',
        },
      },
    },
  },
  session: {
    maxAge: 24 * 3600 * 1000 * 30,
    key: '_ss',
    httpOnly: true,
  },
  view: {
    defaultExtension: '.ejs',
    mapping: {
      '.ejs': 'ejs',
    },
  },
  ejs: {
    cache: false,
  },
  midwayLogger: {
    default: {
      level: 'info',
      transports: {
        console: {
          autoColors: false,
        },
        file: {
          autoColors: false,
        },
        error: {
          autoColors: false,
        },
      },
    },
    clients: {
      appLogger: {
        format: logFormater,
      },
      coreLogger: {
        format: logFormater,
      },
    },
  },
} as MidwayConfig;

function logFormater(info) {
  return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(info.pid)} ${
    info.message
  }`;
}
