const { Controller } = require("egg");

class BizController extends Controller {
  // 获取歌词
  getLyric() {
    const { ctx } = this;
    const query = ctx.$query;
    ctx.success({
      data: query,
    });
  }

  // 上传歌词
  async upload() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate(
      {
        name: { type: "string", max: 100, min: 0 },
        content: { type: "string", max: 1000, min: 0 },
      },
      body,
    );
    const user = await this.service.lyric.createLyric(ctx.userId, body.name, body.lyric);
    this.ctx.success({
      ...this.service.lyric.getLyricInfoByModel(user),
    });
  }
}

module.exports = BizController;
