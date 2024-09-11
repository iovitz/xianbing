import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  koa: {
    port: 7001,
  },
  socketIO: {
    // ...
    transports: ['websocket'],
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
} as MidwayConfig;
