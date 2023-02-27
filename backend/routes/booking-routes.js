const express = require("express");
const { newBooking } = require("../controllers/booking-controller");
const bookingRouter = express.Router();


bookingRouter.post("/", newBooking);

module.exports = bookingRouter;