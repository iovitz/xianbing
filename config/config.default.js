const path = require("path");
const { customAlphabet } = require("nanoid");

module.exports = (appInfo) => {
  const config = (exports = {});

  const nanoid = customAlphabet("123456789", 10);

  // 需要进行jwt鉴权的路由前缀
  config.needAuthPrefixList = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.static = {
    prefix: "/",
    dir: path.join(appInfo.baseDir, "app/public"),
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: true,
  };

  config.cluster = {
    listen: {
      port: 9293,
    },
  };

  // https://xiaochen1024.com/cdn/fe_interview/fe-nodejs-docs-node-graphql-note-13-%E5%8D%B3%E6%97%B6%E9%80%9A%E8%AE%AF.html
  config.io = {
    init: {}, // 透传给Engine.io
    namespace: {
      "/duuk": {
        connectionMiddleware: ["connection"],
        packetMiddleware: ["packet"],
      },
    },
    generateId() {
      return nanoid();
    },
  };

  config.logger = {
    consoleLevel: "INFO",
    allowDebugAtProd: true,
  };

  exports.session = {
    key: "__server_session__",
    maxAge: 30 * 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
    renew: true,
    sameSite: "None",
  };

  config.gzipThreshold = 1000;

  return {
    ...config,
  };
};
