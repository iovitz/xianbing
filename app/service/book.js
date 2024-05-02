const Service = require("egg").Service;

module.exports = class BookService extends Service {
  get C1() {
    return this.app.model.C1;
  }

  get C2() {
    return this.app.model.C2;
  }

  getCategory() {
    return this.C1.findAll({
      while: {
        state: null,
      },
      include: [
        {
          model: this.C2,
          while: {
            state: null,
          },
          attributes: [["id", "c2"], "name"],
        },
      ],
      attributes: [["id", "c1"], "name"],
      row: true,
    });
  }
};
