const express = require('express');
const router = express.Router();

const { getForms, findFormByPk, addForm } = require('../controllers/formsController');

router.get('/', async (req, res) => {
  try {
    const result = await getForms();
    res.json(result);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

router.get('/:id([0-9]+)', async (req, res) => {
  try {
    const result = await findFormByPk(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});


router.post('/', async (req, res) => {
  try {
    const result = await addForm(req.body);
    res.status(result ? 201 : 404).json(result ? result : 'Error occurred while processing');
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

module.exports = router;