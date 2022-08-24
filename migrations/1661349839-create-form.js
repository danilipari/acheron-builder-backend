'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('forms', {
      id: {
        type: Sequelize.BIGINT(12),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      form_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      form_text: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      form_special: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        unique: false,
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
      },
      forms: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      actions: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NULL
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('forms');
  }
};