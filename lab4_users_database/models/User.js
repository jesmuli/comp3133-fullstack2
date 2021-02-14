const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
    trim: false,
    lowercase: false
  },

  username: {
    type: String,
    required: "Username is required",
    unique: true,
    minlength: [4, "Minimum 4 characters"],
    trim: false,
    lowercase: false
  },

  email: {
    type: String,
    required: [true,"Please enter a valid email"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: (value) => {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
  },

  address: {
    type:Object,
  },

  'address.street': {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },

  'address.suite': {
    type: String,
    required: true,
    trim: false,
    lowercase: false
  },

  'address.city': {
    type: String,
    required: true,
    trim: false,
    lowercase: false,
    validate: (value) => {
      var cityRegex = /^[a-zA-Z ]+$/;
      return cityRegex.test(value)
    },
  },

  'address.zipcode': {
    type: String,
    required: true,
    trim: false,
    lowercase: false,
    maxlength: 10,
    validate: (value) => {
      var zipRegex = /\d{5}-\d{4}/;
      return zipRegex.test(value)
    },
  },

  'address.geo': {
    type:Object,
  },

  'address.geo.lat': {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },

  'address.geo.lng': {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },

  phone: {
    type: String,
    required: true,
    trim: true,
    lowercase: false,
    //maxlength: 13, 
    validate: (value) => {
      var phoneRegex = /\d{1}-\d{3}-\d{3}-\d{3}/;
      return phoneRegex.test(value)
    },
  },

  website: {
    type: String,
    required: true,
    trim: true,
    lowercase: false,
    validate: (val) => {
      urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
      return urlRegex.test(val)
    }
  },

  company: {
    type:Object,
  },

  'company.name': {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },

  'company.catchPhrase': {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },

  'company.bs': {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },

});

UsersSchema.plugin(uniqueValidator);


const User = mongoose.model('Users', UsersSchema, 'users');
module.exports = User;