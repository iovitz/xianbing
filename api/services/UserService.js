/**
 * UserService
 *
 * @description :: 处理User表的CRUD
 * @usage       :: UserService.[methodName]()
 */

const jwt = require('jsonwebtoken');
const { customAlphabet } = require('nanoid');
const { Op } = require('sequelize');

const idGenerator = customAlphabet('0123456789', 9);

const Service = {
  genUserId() {
    return `2${idGenerator()}`;
  },

  get User() {
    return sails.mysql.User;
  },

  async searchUser(page, perPage, content) {
    return this.User.findAll({
      where: {
        [Op.or]: [
          {
            nickname: {
              [Op.like]: `%${content}%`,
            },
          },
          {
            userId: content,
          },
        ],
      },
      raw: true,
      limit: perPage,
      offset: (page - 1) * perPage,
      attributes: ['user_id', 'nickname', 'avatar', 'fans_number', 'voice_number', 'state'],
    });
  },

  findByUsername(username, withPassword = false) {
    // TracerService.aef
    return this.User.findOne({
      where: {
        username,
      },
      attributes: {
        include: withPassword ? ['password'] : [],
      },
    }).then((r) => r);
  },

  createToken(data) {
    return (
      `Bearer ${
        jwt.sign(data, this.app.config.jwt.secret, {
          expiresIn: '30d',
        })}`
    );
  },

  getUserInfoByModel(userModel) {
    return {
      user: {
        ..._.pick(userModel, ['userId', 'nickname', 'username', 'avatar', 'state']),
      },
    };
  },
};

module.exports = Service;
