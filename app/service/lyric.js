const { pick } = require("lodash");

const Service = require("egg").Service;

module.exports = class ServiceController extends Service {
  get Lyric() {
    return this.app.model.Lyric;
  }

  getLyric(page, perPage) {
    return this.Lyric.findAll({
      while: {},
      limit: perPage,
      offset: (page - 1) * perPage,
    });
  }

  createLyric(authorId, name, lyric) {
    return this.Lyric.create(
      {
        authorId,
        name,
        lyric,
      },
      {
        raw: true,
        attributes: ["name"],
      },
    );
  }

  getLyricInfoByModel(model) {
    return pick(model, ["id", "name", "lyric", "state"]);
  }
};
