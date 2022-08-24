const Workflow = require('../models').Workflow;

async function getWorkflows() {
  return Workflow.findAll();
}

async function addWorkflow(workflow) {
  return Workflow.create(workflow);
}

module.exports = { getWorkflows, addWorkflow };