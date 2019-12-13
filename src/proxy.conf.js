const PROXY_CONFIG = {
  // "/acms": {
  //   target: "http://192.168.65.229:3000",
  //   secure: false,
  //   logLevel: "debug",
  //   pathRewrite: function(path, req) {
  //     const DEV_MODE = false;
  //     if (DEV_MODE && path.endsWith("query")) {
  //       return path.replace("acms", "acms/distributed");
  //     }
  //     return path;
  //   }
  // },
  // "/aoas": {
  //   target: "http://192.168.65.229:3000",
  //   secure: false,
  //   changeOrigin: true,
  //   logLevel: "debug",
  // },
  "/asms": {
    target: "http://192.168.65.229:3000",
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  },
  "/abfd": {
    target: "http://localhost:5561",
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  },
  "/cust": {
    target: "http://192.168.65.206:1111",
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  },
  "/aoas": {
    target: "http://192.168.65.229:3000",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
  },
  "/asms": {
    target: "http://192.168.65.229:3000",
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  },
  "/acms": {
    target: "http://192.168.65.229:3000",
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  }
  // "/aoas": {
  //   target: "http://localhost:3000",
  //   secure: false,
  //   changeOrigin: true,
  //   logLevel: "debug",
  // },
  // "/asms": {
  //   target: "http://localhost:3000",
  //   secure: false,
  //   changeOrigin: true,
  //   logLevel: "debug"
  // },
  // "/acms": {
  //   target: "http://localhost:3000",
  //   secure: false,
  //   changeOrigin: true,
  //   logLevel: "debug"
  // },
};

module.exports = PROXY_CONFIG;
