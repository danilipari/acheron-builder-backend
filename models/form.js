'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models = models) {
      // define association here
    }
  };
  Form.init({
    id: {
      type: DataTypes.BIGINT(12),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    form_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    form_text: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    form_special: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: false,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4
    },
    forms: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    actions: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Form',
    tableName: 'forms',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Form.associate = (models) => {
    Form.hasMany(models.Workflow, {
      as: 'workflowItems',
      foreignKey: 'workflowId',
    });
  };

  return Form;
};