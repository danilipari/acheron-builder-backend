const express = require('express');
const router = express.Router();

const { getWorkflows, addWorkflow } = require('../controllers/workflowsController');
const { getForms, findFormByPk } = require('../controllers/formsController');

router.get('/', async (req, res) => {
  try {
    const result = await getWorkflows();
    res.json(result);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

router.get('/render', async (req, res) => {
  try {
    const resultW = await getWorkflows();
    const resultF = await getForms();
    res.json(resultW?.map((element) => ({
      ...element.dataValues,
      forms: element.forms.map((form) => (resultF?.filter((elementF) => elementF.dataValues.id == form)[0])),
    })));
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await addWorkflow(req.body);
    res.status(result ? 201 : 404).json(result ? result : 'Error occurred while processing');
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

module.exports = router;