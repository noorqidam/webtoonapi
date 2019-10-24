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
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'EP 1',
        image:
          'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg',
        webtoon: 1,
      },
      {
        title: 'EP 2',
        image:
          'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
        webtoon: 2,
      },
      {
        title: 'EP 3',
        image:
          'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
        webtoon: 3,
      },
      {
        title: 'EP 4',
        image:
          'https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg',
        webtoon: 4,
      },
      {
        title: 'EP 5',
        image:
          'https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id',
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
    return queryInterface.bulkDelete('episodes', null, {});
  },
};
