const models = require('../models');
const Sequelize = require('sequelize');

async function getWorkflows() {
  return models.Workflow.findAll();
}

async function addWorkflow(workflow) {
  return models.Workflow.create(workflow);
}

module.exports = { getWorkflows, addWorkflow };