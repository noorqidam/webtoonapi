'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define(
    'episodes',
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      webtoon: DataTypes.INTEGER,
    },
    {},
  );
  episode.associate = function(models) {
    // associations can be defined here
    episode.belongsTo(models.webtoons, {
      as: 'webToon',
      foreignKey: 'webtoon',
    });
  };
  return episode;
};
