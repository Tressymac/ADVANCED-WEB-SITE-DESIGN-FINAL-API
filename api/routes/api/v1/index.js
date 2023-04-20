var express = require('express');
var router = express.Router();
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

require('models/States');
const States = mongoose.model('states');

// Root route
router.get('/', (req, res) => {
  res.send('Root API route');
});

// Getting all states in database
router.get('/states', async (req, res) => {
  setTimeout(async function() {
      const filter = {};
      const states = await States.find(filter);
      console.log(states);
      res.json(states);
  }, 3000);
});

// Getting all state info in database by the state name only
router.get('/states/:name', async (req, res) => {
  const stateName = req.params.name;

  try {
    const result = await States.findOne({ 'states.name': stateName });
    const state = result.states.find((s) => s.name === stateName);
    res.send(state);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
