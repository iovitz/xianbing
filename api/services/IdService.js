const { customAlphabet } = require('nanoid');

const idGenerator = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789', 9);

module.exports = {
  genId(prefix) {
    return prefix + idGenerator();
  },
};
