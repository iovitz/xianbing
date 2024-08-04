/**
 * AuthService
 *
 * @description :: 用户认证相关逻辑
 * @usage       :: AuthService.[methodName]()
 */

const { customAlphabet } = require('nanoid');
const { v4: uuidv4 } = require('uuid');

const avatarGenerator = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10);

const Service = {
  async createUser(data) {
    const id = IdService.genId('u');
    return sails.mysql.transaction(async (t) => {
      // 用户账户数据
      await sails.mysql.models.User.create({
        id,
        email: data.email,
        password: await EcryptService.encryptPassword(data.password),
      }, { transaction: t });

      // 用户信息表数据
      const userProfile = await sails.mysql.models.UserProfile.create({
        id,
        nickname: data.nickname,
        avatar: `https://api.multiavatar.com/${avatarGenerator()}.png?apikey=${355}`,
      }, {
        transaction: t,
      });

      return {
        id: userProfile.id,
        avatar: userProfile.avatar,
        nickname: userProfile.nickname,
        fansNumber: userProfile.fansNumber,
        voiceNumber: userProfile.voiceNumber,
      };
    });
  },

  async login(data) {},

  async createSession(userId) {
    const sessionId = uuidv4();
    await sails.mysql.models.Session.create({
      userId,
      sessionId,
    });
    return sessionId;
  },
};

module.exports = Service;
