"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superheroes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      realName: {
        type: Sequelize.STRING,
        field: "real_name",
        allowNull: false,
        unique: true,
      },
      originDescription: {
        type: Sequelize.TEXT,
        field: "origin_description",
      },
      superpowers: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      catch_phrase: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
    queryInterface.changeColumn('superheroes', 'superpowers', {
      type:Sequelize.STRING,
      allowNull:false,
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("superheroes");
  },
};
