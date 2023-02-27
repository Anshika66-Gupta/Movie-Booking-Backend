const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
});
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

