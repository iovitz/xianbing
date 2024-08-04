/**
 * AuthService
 *
 * @description :: 用户认证相关逻辑
 * @usage       :: AuthService.[methodName]()
 */

const Service = {

  async createUser(data) {
    const userId = idService.genId('u');
    return sails.models.User.create({
      id: userId,
      nickname: this.genRandomNickname(),
      avatar: `https://api.multiavatar.com/${avatarGenerator()}.png?apikey=${this.app.config.multiavatar_key}`,
      username: data.username,
      password: data.password,
      fansNumber: 0,
      voiceNumber: 0,
    });
  },

};

module.exports = Service;
