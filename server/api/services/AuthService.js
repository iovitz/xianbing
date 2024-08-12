/**
 * AuthService
 *
 * @description :: 用户认证相关逻辑
 * @usage       :: AuthService.[methodName]()
 */

const { customAlphabet } = require('nanoid');
const { v4: uuidv4 } = require('uuid');
const cryptoJS = require('crypto-js');

const avatarGenerator = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10);

const Service = {
  multiAvatarToken: cryptoJS.AES.decrypt(sails.config.secret.aesMultiAvatarKey, sails.config.secret.encrypt.aes).toString(cryptoJS.enc.Utf8),

  get User() {
    return sails.mysql.models.User;
  },

  get UserProfile() {
    return sails.mysql.models.UserProfile;
  },

  get Session() {
    return sails.mysql.models.Session;
  },

  createUser(data) {
    const id = IdService.genId('u');
    return sails.mysql.transaction(async (t) => {
      // 用户账户数据
      await this.User.create({
        id,
        email: data.email,
        password: await EcryptService.encryptPassword(data.password),
      }, { transaction: t });

      // 用户信息表数据
      const userProfile = await this.UserProfile.create({
        id,
        nickname: data.nickname,
        avatar: `https://api.multiavatar.com/${avatarGenerator()}.png?apikey=${this.multiAvatarToken}`,
      }, {
        transaction: t,
      });

      return UserService.getUserProfileInfo(userProfile);
    });
  },

  findUserByEmail(email) {
    return this.User.findOne({
      where: {
        email,
      },
    });
  },

  async createSession(userId) {
    const sessionId = uuidv4();
    await this.Session.create({
      userId,
      sessionId,
    });
    return sessionId;
  },

};

module.exports = Service;
