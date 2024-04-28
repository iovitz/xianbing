const Service = require("egg").Service;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nanoid = require("nanoid");
const { pick } = require("lodash");

module.exports = class UserService extends Service {
  get User() {
    return this.app.model.User;
  }

  async createUser(data) {
    return this.User.create({
      nickname: this.genRandomNickname(),
      uname: data.uname,
      pwd: data.pwd,
    });
  }

  findByUsername(uname) {
    return this.User.findOne({
      where: {
        uname,
      },
    }).then((r) => {
      console.error(r);
      return r;
    });
  }

  genRandomNickname() {
    return `用户` + nanoid(5);
  }

  createToken(data) {
    return jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: this.app.config.jwt.expiresIn,
    });
  }

  getUserInfoByModel(userModel) {
    return {
      user: {
        ...pick(userModel, ["id", "nickname", "uname", "state"]),
      },
    };
  }

  comparePassword(password, hash) {
    return bcrypt.compare(password, hash);
  }

  async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const pass = bcrypt.hash(password, salt);
    return pass;
  }
};
