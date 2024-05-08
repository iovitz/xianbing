const { Controller } = require("egg");

class BizController extends Controller {
  // TODO: 不用查询数据库，可以变成静态JSON
  async getCategory() {
    const { ctx } = this;
    ctx.success(await ctx.service.book.getCategory());
  }

  async getBookDetail() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.validate(
      {
        bookid: { type: "string", max: 16, min: 1, format: /\d+/ },
      },
      ctx.params,
    );
    ctx.success(await ctx.service.book.getBookById(ctx.params.bookid));
  }
}

module.exports = BizController;
