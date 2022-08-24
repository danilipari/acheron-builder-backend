const Form = require('../models').Form;

async function getForms() {
  return Form.findAll();
}

async function findFormByPk(pKey) {
  return Form.findOne({
    where: {
      id: pKey,
    },
  });
}

async function addForm(form) {
  return Form.create(form);
}

module.exports = { getForms, findFormByPk, addForm };