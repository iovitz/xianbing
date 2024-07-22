const { Controller } = require("egg");
const { pagination } = require("../common/dto/dto");

class BizController extends Controller {
  async searchContent() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate(
      {
        content: { type: "string", required: true, max: 100, min: 1 },
        type: { type: "enum", values: ["all", "user", "voice", "lyric", "user", "group"] },
        ...pagination,
      },
      body,
    );

    if (body.type === "user") {
      const res = await this.service.user.findUserByName(body.page, body.per_page, body.content);
      return ctx.success(res);
    }
  }
}

module.exports = BizController;
