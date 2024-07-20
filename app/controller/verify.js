const { Controller } = require("egg");

class BizController extends Controller {
  /**
   * 获取验证码
   */
  getVerifyCode() {
    const { ctx } = this;
    ctx.validate(
      {
        width: { type: "string", required: true },
        height: { type: "string", required: true },
        field: { type: "string", required: true, max: 20, min: 1 },
      },
      ctx.query,
    );
    const { data, text: code } = ctx.service.code.getVerifyCode(Number(ctx.query.width), Number(ctx.query.height));

    ctx.session[`#c_${ctx.query.field}`] = code;
    ctx.session[`#t_${ctx.query.field}`] = Date.now();

    ctx.success(data);
  }
}

module.exports = BizController;
