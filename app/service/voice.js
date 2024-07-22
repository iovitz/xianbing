const Service = require("egg").Service;

module.exports = class ServiceController extends Service {
  get Voice() {
    return this.app.model.Voice;
  }
};
