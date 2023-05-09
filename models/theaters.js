// Collection: theaters

const mongoose = require("mongoose");
const {Types } = mongoose;
const Schema = mongoose.Schema;

const theatersSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    movies: { type: [Types.ObjectId], required: true }, // references movies collection
  },
  {
    versionKey: false,
  }
);
const theaters = mongoose.model('theaters', theatersSchema);
module.exports = theaters;
