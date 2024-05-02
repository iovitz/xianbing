const Service = require("egg").Service;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { nanoid, customAlphabet } = require("nanoid");
const { pick } = require("lodash");

const idGenerator = customAlphabet("0123456789", 9);

module.exports = class UserService extends Service {
  genUserId() {
    return `2${idGenerator()}`;
  }

  get User() {
    return this.app.model.User;
  }

  async createUser(data) {
    return this.User.create({
      nickname: this.genRandomNickname(),
      uid: this.genUserId(),
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
        ...pick(userModel, ["uid", "nickname", "uname", "state"]),
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
