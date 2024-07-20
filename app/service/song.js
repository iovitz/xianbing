const Service = require("egg").Service;

module.exports = class ServiceController extends Service {
  get SongWords() {
    return this.app.model.SongWords;
  }
};
