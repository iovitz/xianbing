import { MidwayConfig } from '@midwayjs/core';
import { gray, red, yellow } from 'ansis';

export default {
  // use for cookie sign key, should change to your own and keep security
  koa: {
    port: 7001,
    contextLoggerFormat: info => {
      const ctx = info.ctx;
      return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(
        info.pid
      )} ${red(ctx.traceId ?? '')} ${info.message}`;
    },
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
  typeorm: {
    defaultDataSourceName: 'mysql',
    dataSource: {
      mysql: {
        type: 'mysql',
        synchronize: false, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,
      },
    },
  },
} as MidwayConfig;

function logFormater(info) {
  return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(info.pid)} ${
    info.message
  }`;
}
