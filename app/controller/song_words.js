const Controller = require("../core/controller");

class BizController extends Controller {
  /**
   * 获取歌词
   */
  getSongWords() {
    this.ctx.success("OKOK");
  }
}

module.exports = BizController;
