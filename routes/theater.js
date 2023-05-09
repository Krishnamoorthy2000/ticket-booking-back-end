const express = require('express');
const router = express.Router();
const Theater = require('../models/theaters');

// Create a new theater
router.post('/', async (req, res) => {
  const { name, address, city, state, zip } = req.body;
  try {
    const theater = await Theater.create({
      name,
      address,
      city,
      state,
      zip
    });
    res.status(201).json({message:"theater created sucessfull"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const theater = await Theater.find();
    res.json(theater);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving theater' });
  }
});

module.exports = router;
