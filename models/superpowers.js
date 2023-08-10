"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superpowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      Superpowers.belongsTo(models.Superpowers, {
        foreignKey:'id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  Superpowers.init(
    {
      superpowers_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notEmpty: true, notNull: true },
      },
    },
    {
      sequelize,
      modelName: "Superpowers",
      tableName: "superpowers",
      underscored: true,
    }
  );
  return Superpowers;
};