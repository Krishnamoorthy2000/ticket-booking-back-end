const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const seatSchema = new mongoose.Schema({
  soldSeats: {
    type: [Number],
    required: true,
  },
  movie_id: {
    type: ObjectId,
    ref: 'movies', // Name of the related model (optional)
    required: true,
  },
  theater_id: {
    type: ObjectId,
    ref: 'theaters', // Name of the related model (optional)
    required: true,
  },
});

const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat;