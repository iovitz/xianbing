const { customAlphabet } = require('nanoid');

const idGenerator = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789', 9);

const Service = {
  genId(prefix) {
    return prefix + idGenerator();
  },
};

module.exports = Service;
