'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    gallery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    pos: {
      type: DataTypes.INTEGER
    },
    enabled: {
      type: DataTypes.BOOLEAN
    },
    video: {
      type: DataTypes.BOOLEAN
    },
    seolink: {
      type: DataTypes.STRING
    },
  };
  var options = {
    associate: function (models) {
      models.cms_gallery_gallery.hasMany(models.cms_gallery_item, { foreignKey: 'gallery_id'});
      models.cms_gallery_gallery.hasMany(models.cms_lang_translate_value, { foreignKey: 'target_id'});
    },
    timestamps: false,
    tableName: 'cms_gallery_gallery'
  };

  return sequelize.define('cms_gallery_gallery', attributes, options);
};
