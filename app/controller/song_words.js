const Controller = require("../core/controller");

class BizController extends Controller {
  // 获取歌词
  getSongWords() {
    this.ctx.success("OKOK");
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
