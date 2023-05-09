const express = require('express');
const router = express.Router();
const seatSchema = require('../models/seats');

router.put('/:movie_id/:theater_id', async (req, res) => {
  const movie_id = req.params.movie_id;
  const theater_id = req.params.theater_id;
  const seatData = req.body;

  try {
    const seat = await seatSchema.findOne({ movie_id, theater_id });
    if (seat.status !== 'sold') {
      seat.status = status;
      const updatedSeat = await seat.save();
      res.json(updatedSeat);
    } else {
      res.status(400).json({ message: 'Seat is already sold' });
    }
  } catch (err) {
    res.status(404).json({ message: 'Seat not found' });
  }
});

router.post('/:movie_id/:theater_id', async (req, res) => {
  const movie_id = req.params.movie_id;
  const theater_id = req.params.theater_id;
  const soldSeats = req.body;

  try {
    const seat = new seatSchema({
      soldSeats,
      movie_id,
      theater_id,
    });
    await seat.save();
    res.status(201).json({ message: 'Seat booked' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in booking seat' });
  }
});

router.get('/:movie_id/:theater_id', async (req, res) => {
  const movie_id = req.params.movie_id;
  const theater_id = req.params.theater_id;

  try {
    // Find all seat bookings for the specified movie and theater
    const seats = await seatSchema.find({ movie_id, theater_id });

    // Send the list of seat bookings as the response
    res.status(200).json(seats);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in retrieving seats' });
  }
});


module.exports = router;
