const { pick } = require("lodash");

const Service = require("egg").Service;

module.exports = class ServiceController extends Service {
  get SongWords() {
    return this.app.model.SongWords;
  }

  createSongWords(authorId, name, words) {
    return this.SongWords.create(
      {
        authorId,
        name,
        words,
      },
      {
        raw: true,
        attributes: ["name"],
      },
    );
  }

  getSongWordInfoByModel(userModel) {
    return pick(userModel, ["id", "name", "words", "state"]);
  }
};
