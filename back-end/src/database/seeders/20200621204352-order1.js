'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [{
      market_id: 1,
      product_name: "Feijão",
      quantity: 20,
      expiration_date: "2020-06-30",
      location: "Rua Nove de Novembro, 24 - Ipiranga",
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
