"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superpowers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      superpowers_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,

      },

      superhero_id: {
        type: Sequelize.INTEGER,
        field:'superhero_id',
        references:{
          model:{
            tableName:'superheroes'
          },
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'

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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("superpowers");
  },
};