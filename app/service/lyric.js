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

  createLyric(authorId, name, content) {
    return this.Lyric.create(
      {
        authorId,
        name,
        content,
      },
      {
        raw: true,
        attributes: ["name"],
      },
    );
  }

  getLyricInfoByModel(model) {
    return pick(model, ["id", "name", "content", "state"]);
  }
};
