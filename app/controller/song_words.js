const { Controller } = require("egg");
const { pagination } = require("../common/dto/dto");

class BizController extends Controller {
  // 获取歌词
  getSongWords() {
    const { ctx } = this;
    const query = ctx.$query;
    ctx.validate(
      {
        ...pagination,
      },
      query,
    );
    ctx.success({
      data: query,
    });
  }

  // 上传歌词
  async uploadWords() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate(
      {
        name: { type: "string", max: 100, min: 0 },
        words: { type: "string", max: 1000, min: 0 },
      },
      body,
    );
    const user = await this.service.songWords.createSongWords(ctx.userId, body.name, body.words);
    this.ctx.success({
      ...this.service.songWords.getSongWordInfoByModel(user),
    });
  }
}

module.exports = BizController;
