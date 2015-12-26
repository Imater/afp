'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
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
      models.cms_news_item.hasMany(models.cms_news_item_data, { foreignKey: 'item_id'});
      models.cms_news_item.hasMany(models.cms_news_item_image, { foreignKey: 'item_id'});
      models.cms_news_item.hasMany(models.cms_lang_translate_value, { foreignKey: 'target_id'});
    },
    timestamps: false,
    tableName: 'cms_news_item'
  };

  return sequelize.define('cms_news_item', attributes, options);
};
