import { MidwayConfig } from '@midwayjs/core';
import { gray, red, yellow } from 'ansis';
import { homedir } from 'os';
import { join } from 'path';

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
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'better-sqlite3', // 使用 better-sqlite3 驱动
        // 数据放在 ~/sqlite 目录下
        database: join(homedir(), 'sqlite', 'xianbing.sqlite'),
        // 使用 better-sqlite3 一定要选上这个，否则会出现报错：Error: Could not locate the bindings file.
        // 或者每次安装完依赖去 better-sqlite3 目录下执行 npm run build-release 一下，也能解决问题
        // 错误原因查看官网的nativeBinding选项介绍
        // 官网：https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md
        // typeorm 对 better_sqlite3 的支持度不太好，没有直接build
        // nativeBinding: 'src/shared/sqlite/better_sqlite3.node', // 直接指定已经打包编译的文件

        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,

        // 配置实体模型
        // entities: [User],

        // 支持如下的扫描形式，为了兼容我们可以同时进行.js和.ts匹配
        entities: [
          // 'sqlite', // 特定目录
          'models/*.sqlite.{j,t}s', // 通配加后缀匹配
        ],
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

function logFormater(info: any) {
  if (process.env.NODE_ENV === 'production') {
    return `${info.timestamp} ${info.LEVEL} ${info.pid} ${info.message}`;
  }
  return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(info.pid)} ${
    info.message
  }`;
}
