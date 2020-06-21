'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [{
      market_id: 1,
      product_name: "Arroz",
      expiration_date: "2020-06-26",
      location: "Rua Dez, 90 - Centro - São Paulo",
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
