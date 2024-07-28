const Service = require("egg").Service;

module.exports = class ServiceController extends Service {
  get Fans() {
    return this.app.model.Fans;
  }

  createFans(userId, fansId) {
    return this.Fans.create({
      userId,
      fansId,
    });
  }

  getFans(fansId, userIds = []) {
    const { Op } = this.app.Sequelize;
    return this.Fans.findAll({
      where: {
        fansId,
        userId: {
          [Op.in]: userIds,
        },
      },
      raw: true,
    });
  }
};
