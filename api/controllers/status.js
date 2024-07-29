module.exports = {

  friendlyName: 'Status',

  description: 'Status something.',

  inputs: {

  },

  exits: {

  },

  async fn() {
    if (3 > 2) {
      throw new Error('niubi');
    }
    this.res.ok(123123);
  },

};
