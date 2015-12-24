'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    item_id: {
      type: DataTypes.INTEGER
    },
    key: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.STRING
    }
  };
  var options = {
    associate: function (models) {
    },
    timestamps: false,
    tableName: 'cms_news_item_data'
  };

  return sequelize.define('cms_news_item_data', attributes, options);
};
