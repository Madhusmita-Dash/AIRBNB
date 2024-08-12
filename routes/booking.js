const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controllers/booking.js");

// Create Booking Route
router.post("/", isLoggedIn, wrapAsync(bookingController.createBooking));

// Cancel Booking Route
router.delete(
  "/:bookingId",
  isLoggedIn,
  wrapAsync(bookingController.destroyBooking)
);

module.exports = router;
