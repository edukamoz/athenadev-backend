'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id_user: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(65)
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(80)
      },
      score: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      timeOnSite: {
        allowNull: true,
        type: DataTypes.DATE
      },
      photo: {
        allowNull: true,
        type: DataTypes.BLOB
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
