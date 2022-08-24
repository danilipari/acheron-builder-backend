'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('workflows', {
      id: {
        type: Sequelize.BIGINT(12),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          notEmpty: true,
        }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      forms: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      error_form: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      unavailable_form: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      layout_id: {
        type: Sequelize.BIGINT(12),
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
    await queryInterface.dropTable('workflows');
  }
};