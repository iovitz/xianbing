const Service = require("egg").Service;

module.exports = class BookService extends Service {
  get C1() {
    return this.app.model.C1;
  }

  get C2() {
    return this.app.model.C2;
  }

  get Book() {
    return this.app.model.Book;
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

  getBookById(id) {
    return this.Book.findByPk(id, {
      while: {
        state: null,
      },
      include: [
        {
          model: this.C2,
          while: {
            state: null,
          },
          as: "c2_info",
          attributes: [["id", "c2"], "name"],
        },
        {
          model: this.C1,
          while: {
            state: null,
          },
          as: "c1_info",
          attributes: [["id", "c2"], "name"],
        },
      ],
      attributes: ["name", "author", "poster", "price"],
    });
  }
};
