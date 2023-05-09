const express =require('express');
const router = express.Router();
const moviesSchema = require('../models/movies');


router.post('/', async (req, res) => {
       const { title, releaseDate, duration, cast, directors, writers, poster } = req.body;
       const movie = new moviesSchema({ title, releaseDate, duration, cast, directors, writers, poster });
       try {
         await movie.save();
         res.status(201).json({ message: 'Movie added successfully' });
       } catch (err) {
         console.error(err);
         res.status(500).json({ message: 'Error adding movie' });
       }
     });

  router.get('/', async (req, res) => {
  try {
    const movies = await moviesSchema.find();
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving movies' });
  }
});
    

     module.exports=router;