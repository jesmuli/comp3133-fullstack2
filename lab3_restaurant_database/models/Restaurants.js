const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: {
    type:Object,
  },

  'address.building': {
    type: String,
    required: false
  },
  'address.street':  {
    type: String,
    required: false
  },
  'address.zipcode': {
    type: String,
    required: false
  },
  

  city:{
    type: String,
    required: true,
    trim: true, 
    lowercase: true 
  },

  'address.geo': {
    type:Object,
  },
  'address.geo.lat': {
    type: String,
    required: true
  },
  'address.geo.lng': {
    type: String,
    required: true
  },

  phone:{
    type: String,
    required: true
  },

  website: {
    type: String,
    required: true
  },

  company: {
    type:Object,
  },

  'company.name': {
    type: String,
    required: true
  },
  'company.catchPhrase':  {
    type: String,
    required: true
  },
  'company.bs':  {
    type: String,
    required: true
  },

});


const Restaurant = mongoose.model('Restaurant', RestaurantSchema,'Restaurants');
module.exports = Restaurant;