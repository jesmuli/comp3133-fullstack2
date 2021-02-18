const mongoose = require('mongoose');

const HotelBookingSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    required: true,
    trim: false,
    lowercase: false
  },
  booking_date: {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },
  booking_start: {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },
  booking_end: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  user_id: {
    type: Number,
    required: true,
    trim: false,
    lowercase: false
  },

});

const HotelBooking = mongoose.model('HotelBookings', HotelBookingSchema,'HotelBookings');
module.exports = HotelBooking;

