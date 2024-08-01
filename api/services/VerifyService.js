const Joi = require('joi');

module.exports = {
  verify(rule, obj) {
    const { value, error } = Joi.object(rule).validate(obj);

    if (error) {
      throw 'badRequest';
    }
    return value;
  },
};
