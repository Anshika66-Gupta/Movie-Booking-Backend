const express = require("express");
const { newBooking, getBookById, deleteBooking } = require("../controllers/booking-controller");
const bookingRouter = express.Router();


bookingRouter.post("/", newBooking);
bookingRouter.get("/:id", getBookById);
bookingRouter.delete("/:id", deleteBooking);


module.exports = bookingRouter;