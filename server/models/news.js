'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    group_name: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    title_eng: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING(500000)
    },
    content_eng: {
      type: DataTypes.STRING(500000)
    },
    description: {
      type: DataTypes.STRING(500000)
    },
    description_eng: {
      type: DataTypes.STRING(500000)
    },
    images: {
      type: DataTypes.STRING(500000)
    },
    enabled: {
      type: DataTypes.BOOLEAN
    },
    showdate: {
      type: DataTypes.BOOLEAN
    },
    date: {
      type: DataTypes.DATE
    },
  };
  var options = {
    associate: function (models) {
    },
    timestamps: true,
    tableName: 'news'
  };

  return sequelize.define('news', attributes, options);
};
