/**
 * sequelize hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineSequelizeHook(sails) {
  return {

    /**
     * Runs when this Sails app loads/lifts.
     */
    async initialize() {
      sails.log.info('Initializing custom hook (`sequelize`)');
    },

  };
};
