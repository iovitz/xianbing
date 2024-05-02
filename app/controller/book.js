const { Controller } = require("egg");

class BizController extends Controller {
  async getCategory() {
    const { ctx } = this;

    ctx.success(await ctx.service.book.getCategory());
  }
}

module.exports = BizController;
