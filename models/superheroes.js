"use strict";
const { Model } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/types/query-types");
module.exports = (sequelize, DataTypes) => {
  class Superheroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Superheroes.hasMany(models.Superpowers, {
        foreignKey: "superhero_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Superheroes.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "real_name",
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      originDescription: {
        type: DataTypes.TEXT,
        unique: true,
        field: "origin_description",
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      superpowers: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      catch_phrase: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Superheroes",
      tableName: "superheroes",
      underscored: true,
    }
  );
  return Superheroes;
};
