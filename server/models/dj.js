'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.STRING
    },
    top: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    title_eng: {
      type: DataTypes.STRING
    },
    preview: {
      type: DataTypes.STRING
    },
    preview_eng: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    description_eng: {
      type: DataTypes.TEXT
    },
    stage: {
      type: DataTypes.INTEGER
    },
    visible: {
      type: DataTypes.BOOLEAN
    },
    order: {
      type: DataTypes.INTEGER
    }
  };
  var options = {
    associate: function (models) {
    },
    tableName: 'afp_djs'
  };

  return sequelize.define('dj', attributes, options);
};
