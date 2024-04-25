const secretConfig = require("./config.secret");
const path = require("path");

module.exports = (appInfo) => {
  const config = (exports = {});

  // 需要进行jwt鉴权的路由前缀
  config.needAuthPrefixList = [];

  config.keys = "b22db542-2691-47d9-997d-512a0c554d5b";

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
      port: 3333,
    },
  };

  config.io = {
    namespace: {
      "/": {
        connectionMiddleware: ["auth"],
        packetMiddleware: ["filter"],
      },
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
    ...secretConfig,
    ...config,
  };
};
