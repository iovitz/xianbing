const { Controller } = require("egg");

class BizController extends Controller {
  async register() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate({
      username: { type: "string", required: true, max: 10, min: 2 },
      password: { type: "string", required: true, max: 16, min: 6 },
      vcode: { type: "string", required: true, max: 4, min: 4 },
    });
    ctx.service.code.checkVerifyCode("login", ctx.$body.vcode);

    const userService = this.service.user;
    if (await userService.findByUsername(body.username)) {
      return ctx.throw(422, "用户名已存在");
    }
    body.password = await userService.encryptPassword(body.password);
    const user = await userService.createUser(body);

    const token = userService.createToken({
      userid: user._id,
    });

    ctx.success({
      ...userService.getUserInfoByModel(user),
      token,
    });
  }
}

module.exports = BizController;
