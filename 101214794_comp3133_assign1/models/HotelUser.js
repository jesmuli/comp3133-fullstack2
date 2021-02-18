const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const HotelUserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true,
    trim: false,
    lowercase: false
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: false,
    lowercase: false
  },
  password: {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: (value) => {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
  },

});

HotelUserSchema.plugin(uniqueValidator);

const HotelUser = mongoose.model('HotelUsers', HotelUserSchema,'HotelUsers');
module.exports = HotelUser;

