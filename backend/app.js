const express = require ("express");
const mongoose  = require ("mongoose");
const app = express();
const dotenv  = require ('dotenv');
const userRouter  = require ("./routes/user-routes.js");
const adminRouter  = require  ("./routes/admin-routes.js");
const movieRouter  = require  ("./routes/movie-routes.js");
dotenv.config();
const PORT=4500;

//middleware routes
app.use(express.json());
app.use("/user", userRouter); 
app.use("/admin", adminRouter); 
app.use("/movie", movieRouter)

mongoose.connect(`mongodb+srv://ansgupta01:${process.env.MONGODB_PASSWORD}@movie-booking.yd2fpqw.mongodb.net/?retryWrites=true&w=majority`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
    .then(() => 
        console.log("connected successfully")
)
    .catch((e) => console.log(e));

    app.listen(PORT,()=>{
        console.log(`SERVER RUNNING ON ${PORT}`);
    })
