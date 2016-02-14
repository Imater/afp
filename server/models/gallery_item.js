'use strict';

module.exports = function (sequelize, DataTypes) {
  var attributes = {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    gallery_id: {
      type: DataTypes.INTEGER
    },
    enabled: {
      type: DataTypes.BOOLEAN
    },
    name: {
      type: DataTypes.STRING
    },
    pos: {
      type: DataTypes.INTEGER
    },
    link: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    }
  };
  var options = {
    associate: function (models) {
    },
    timestamps: false,
    tableName: 'cms_gallery_item'
  };

  return sequelize.define('cms_gallery_item', attributes, options);
};
