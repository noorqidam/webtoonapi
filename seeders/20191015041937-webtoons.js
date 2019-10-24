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
    return queryInterface.bulkInsert('webtoons', [
      {
        title: 'Kematian Jiraiya',
        genre: 'Action',
        fav_count: 0,
        image:
          'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg',
        created_by: 1,
      },
      {
        title: 'Naruto vs Pain',
        genre: 'Action',
        fav_count: 0,
        image:
          'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
        created_by: 1,
      },
      {
        title: "Rapat Kage",
        genre: 'Action',
        fav_count: 0,
        image:
          'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
        created_by: 1,
      },
      {
        title: "Itachi vs Sasuke",
        genre: 'Action',
        fav_count: 0,
        image:
          'https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg',
        created_by: 2,
      },
      {
        title: 'Bangkitnya Madara',
        genre: 'Action',
        fav_count: 0,
        image:
          'https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id',
        created_by: 2,
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
    return queryInterface.bulkDelete('webtoons', null, {});
  },
};
