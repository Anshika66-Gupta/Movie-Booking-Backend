const express = require ("express");
const { addMovie, getAllMovies } = require ("../controllers/movie-controller");
const movieRouter = express.Router();


movieRouter.get("/", getAllMovies);
movieRouter.post("/", addMovie);


module.exports = movieRouter;