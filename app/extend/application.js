module.exports = {
  get isProd() {
    return this.config.env === "prod";
  },
};
