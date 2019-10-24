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
    return queryInterface.bulkInsert('images', [
      {
        page: 1,
        image:
          'https://i0.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/04.jpg',
        episode: 1,
      },
      {
        page: 2,
        image:
          'https://i2.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/11.jpg',
        episode: 1,
      },
      {
        page: 3,
        image:
          'https://i3.wp.com/www.komikid.com/uploads/manga/naruto/chapters/381/10.jpg',
        episode: 1,
      },
      {
        page: 1,
        image:
          'https://i0.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/16.jpg',
        episode: 2,
      },
      {
        page: 2,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPxQWeCwYL5V6RT6uPdgjtjbS5UYmmRztUhgxxs4l0w5J4-Sq',
        episode: 2,
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
    return queryInterface.bulkDelete('images', null, {});
  },
};
