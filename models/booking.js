const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  totalGuests: {
    type: Number,
    required: true,
    min: 1,
  },
  phone: {
    type: Number,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  numNights: {
    type: Number,
    required: true,
    min: 1,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  listing: {
    type: Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
