const { Controller } = require("egg");

class BizController extends Controller {
  async register() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate({
      uname: { type: "string", max: 16, min: 6, format: /\S+/ },
      pwd: { type: "string", max: 16, min: 6, format: /\S+/ },
      vcode: { type: "string", max: 4, min: 4 },
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

  async login() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate({
      uname: { type: "string", max: 16, min: 6, format: /\S+/ },
      pwd: { type: "string", max: 16, min: 6, format: /\S+/ },
      vcode: { type: "string", max: 4, min: 4 },
    });
    ctx.service.code.checkVerifyCode("login", ctx.$body.vcode);

    const userService = this.service.user;
    const user = await userService.findByUsername(body.uname);
    if (user && (await ctx.service.user.comparePassword(body.pwd, user.pwd))) {
      const token = userService.createToken({
        userid: user.id,
      });
      return ctx.success({
        ...userService.getUserInfoByModel(user),
        token,
      });
    }

    return ctx.paramsError("用户名或密码错误");
  }
}

module.exports = BizController;
