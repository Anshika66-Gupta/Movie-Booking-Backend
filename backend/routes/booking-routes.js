const express = require("express");
const { newBooking, getBookById } = require("../controllers/booking-controller");
const bookingRouter = express.Router();


bookingRouter.post("/", newBooking);
bookingRouter.get("/:id", getBookById);
bookingRouter.delete("/id");


module.exports = bookingRouter;