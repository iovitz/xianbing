const { Controller } = require("egg");

class BizController extends Controller {
  async register() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate({
      uname: { type: "string", required: true, max: 16, min: 6, format: /^[0-9a-zA-Z_]+$/ },
      pwd: { type: "string", required: true, max: 16, min: 6, format: /^[0-9a-zA-Z_]{1,}$/ },
      vcode: { type: "string", required: true, max: 4, min: 4 },
    });
    ctx.service.code.checkVerifyCode("register", ctx.$body.vcode);

    const userService = this.service.user;
    if (await userService.findByUsername(body.uname)) {
      return ctx.throw(422, "用户名已存在");
    }
    body.pwd = await userService.encryptPassword(body.pwd);
    const user = await userService.createUser(body);

    const token = userService.createToken({
      userid: user.id,
    });

    ctx.success({
      ...userService.getUserInfoByModel(user),
      token,
    });
  }
}

module.exports = BizController;
