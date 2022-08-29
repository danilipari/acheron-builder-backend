const models = require('../models');

async function getForms() {
  return models.Form.findAll();
}

async function findFormByPk(pKey) {
  return models.Form.findOne({
    where: {
      id: pKey,
    },
  });
}

async function addForm(form) {
  return models.Form.create(form);
}

module.exports = { getForms, findFormByPk, addForm };