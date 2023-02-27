const Bookings = require ("../models/Booking");
const newBooking = async (req, res, next) => {
    const { movie, date, seatNumber, user } = req.body
    
    let booking;
    try {
       
        booking = new Bookings({
            movie,
            date: new Date(`${date}`),
            seatNumber,
            user,
        });
        booking = await booking.save();
    }
    catch (error) {
        console.log(error)
    }
    if (!booking) {
        return res.status(400).json({ message: "Something went wrong to create booking" });
    }
return res.status(201).json({Bookings: booking})
    
};


module.exports = { newBooking }