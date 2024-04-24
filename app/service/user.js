const Service = require("egg").Service;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { pick } = require("lodash");

module.exports = class UserService extends Service {
  get User() {
    return this.app.model.User;
  }

  createToken(data) {
    return jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: this.app.config.jwt.expiresIn,
    });
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
