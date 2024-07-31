module.exports = {

  friendlyName: 'Status',

  description: 'Status something.',

  inputs: {

  },

  exits: {

  },

  async fn() {
    // await sails.mysql.user.create({
    //   name: '123',
    //   age: 18,
    // });
    this.res.ok(123123);
  },

};
