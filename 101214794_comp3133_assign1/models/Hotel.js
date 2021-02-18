const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const HotelSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    unique: true,
    required: true,
    trim: false,
    lowercase: false
  },
  hotel_name: {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },
  street: {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },
  city: {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },
  postal_code: {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },
  price: {
    type: Number,
    required: true,
    trim: false,
    lowercase: false
  },
  email: {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },
});


HotelSchema.plugin(uniqueValidator);

const Hotel = mongoose.model('Hotels', HotelSchema,'Hotels');
module.exports = Hotel;

