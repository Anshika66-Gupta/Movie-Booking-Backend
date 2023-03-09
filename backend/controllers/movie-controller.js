const jwt = require ("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const Admin = require("../models/Admin");
const Movie = require ("../models/Movie");
const addMovie = async (req, res, next) => {
    const extractedToken = req.headers.authorization.split(" ")[1];
    
    if (!extractedToken && extractedToken.trim() === "") {
        return res.status(401).json({
            message: 'No token provided',
        });
    }
    let adminId;
    //verify token
    
    jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
        if (err) {
            return res.status(401).json({
                message: 'Invalid token',
            });
        }
        else {
            adminId = decrypted.id;
            return;
        }
    });
    
    //create a new movie{
    
    const { title, description, releaseDate, posterUrl, featured, actors } = req.body;
    if (!title && title.trim() === "" && !description && description.trim() === "" &&!posterUrl && posterUrl.trim() === " "
    )
    {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    
    let movie;
    try {
        movie = new Movie({
            title,
            description,
            releaseDate: new Date(`${releaseDate}`),
            featured,
            actors,
            admin: adminId,
            posterUrl,
            
        });
        
        const session = await mongoose.startSession();
        const adminUser = await Admin.findById(adminId);
        session.startTransaction();
        await movie.save({ session });
        adminUser.addedMovies.push(movie);
        await adminUser.save({ session });
        
        await session.commitTransaction();
        
     }
    catch (error) { 
     return console.log(error);   
    }
    if (!movie) {
        return res.status(500).json({
            message: 'Something went wrong',
        });
    }
   return res.status(201).json({movie});
};


const getAllMovies = async (req, res, next) => {
    let movies;
    try { 
        movies = await Movie.find();
    }
    catch (err) {
        return console.log(err);
    }
    if (!movies){
     
        return res.status(500).json({
            message: 'Something went wrong',
        });
    }
    return res.status(200).json({movies});
}
const getMovieById = async (req, res, next) => { 
    const id = req.params.id;
    let movies;
    try {
        movies = await Movie.findById(id);
    } catch (err) { 
        return console.log(err);
    }
    if (!movies){
        return res.status(500).json({
            message: 'Something went wrong',
        });
    }
    return res.status(200).json({movies});
    
}


module.exports = {getAllMovies, addMovie, getMovieById}