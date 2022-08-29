'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workflow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models = models) {
      // define association here
    }
  };
  Workflow.init({
    id: {
      type: DataTypes.BIGINT(12),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        notEmpty: true,
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    forms: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    error_form: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    unavailable_form: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    layout_id: {
      type: DataTypes.BIGINT(12),
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Workflow',
    tableName: 'workflows',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Workflow.associate = (models) => {
    Workflow.hasMany(models.Form, {
      as: 'formsItems',
      foreignKey: 'formId',
    });
  };

  return Workflow;
};