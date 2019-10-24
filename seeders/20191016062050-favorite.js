'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('favourites', [
      {
        user: 1,
        webtoon: 1,
      },
      {
        user: 1,
        webtoon: 2,
      },
      {
        user: 1,
        webtoon: 3,
      },
      {
        user: 2,
        webtoon: 4,
      },
      {
        user: 2,
        webtoon: 5,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('favourites', null, {});
  },
};
