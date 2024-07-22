const Service = require("egg").Service;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { nanoid, customAlphabet } = require("nanoid");
const { pick } = require("lodash");

const idGenerator = customAlphabet("0123456789", 9);
const avatarGenerator = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 10);

module.exports = class ServiceController extends Service {
  genUserId() {
    return `2${idGenerator()}`;
  }

  get User() {
    return this.app.model.User;
  }

  async createUser(data) {
    const userId = this.genUserId();
    return this.User.create({
      nickname: this.genRandomNickname(),
      userId,
      avatar: `https://api.multiavatar.com/${avatarGenerator()}.png?apikey=${this.app.config.multiavatar_key}`,
      uname: data.uname,
      pwd: data.pwd,
    });
  }

  async findUserByName(page, perPage, content) {
    const { Op } = this.app.Sequelize;
    return this.User.findAll({
      where: {
        [Op.or]: [
          {
            nickname: {
              [Op.like]: "%ar%",
            },
          },
          {
            userId: content,
          },
        ],
      },
      limit: perPage,
      offset: (page - 1) * perPage,
    });
  }

  findByUsername(uname) {
    return this.User.findOne({
      where: {
        uname,
      },
    }).then((r) => {
      return r;
    });
  }

  genRandomNickname() {
    return `用户` + nanoid(5);
  }

  createToken(data) {
    return (
      "Bearer " +
      jwt.sign(data, this.app.config.jwt.secret, {
        expiresIn: this.app.config.jwt.expiresIn,
      })
    );
  }

  getUserInfoByModel(userModel) {
    return {
      user: {
        ...pick(userModel, ["userId", "nickname", "uname", "avatar", "state"]),
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
