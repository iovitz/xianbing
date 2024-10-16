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
} as MidwayConfig;

function logFormater(info) {
  return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(info.pid)} ${
    info.message
  }`;
}
