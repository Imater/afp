'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    translate_id: {
      type: DataTypes.INTEGER
    },
    lang_id: {
      type: DataTypes.INTEGER
    },
    value: {
      type: DataTypes.STRING
    },
    target_id: {
      type: DataTypes.INTEGER
    }
  };
  var options = {
    associate: function (models) {
    },
    timestamps: false,
    tableName: 'cms_lang_translate_value'
  };

  return sequelize.define('cms_lang_translate_value', attributes, options);
};
