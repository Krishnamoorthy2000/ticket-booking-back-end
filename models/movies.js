const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const moviesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    cast:{
      type:[String],
      required:true
    },

    directors: {
      type: [String],
      required: true,
    },
    writers: { type: [String], required: true },
    poster: {
      type: String,
      required: true,
    },
    theater_id: {
      type: [Types.ObjectId] //theater object id
    }
  },
  {
    versionKey: false,
  }
);

const movies = mongoose.model("movies", moviesSchema);

module.exports = movies;
