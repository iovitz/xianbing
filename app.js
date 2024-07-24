module.exports = class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {
    // Config, plugin files have been loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
    // 引入validate目录，并注入app实例
    // const directory = path.join(this.app.config.baseDir, "app/validate");
    // this.app.loader.loadToApp(directory, "validate");
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready
    this.app.model
      .sync({ alter: true })
      .then(() => {
        this.app.logger.info("同步DB Model成功");
      })
      .catch((e) => {
        this.app.logger.error("同步DB数据失败", e);
      });
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
    this.app.logger.info(`Server running in http://localhost:${this.app.config.cluster.listen.port}`);
  }

  async beforeClose() {
    // Do some thing before app close.
  }
};
