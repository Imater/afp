'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    target: {
      type: DataTypes.STRING
    },
    target_id: {
      type: DataTypes.INTEGER
    },
    pubdate: {
      type: DataTypes.DATE
    },
    email: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE
    },
  };
  var options = {
    associate: function (models) {
    },
    tableName: 'cms_subscribe',
    timestamps: false,
  };

  return sequelize.define('subscribe', attributes, options);
};
