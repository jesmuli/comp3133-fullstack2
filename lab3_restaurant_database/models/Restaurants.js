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

  cuisine: {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },

  name: {
    type: String,
    required: true,
    trim: false,
    lowercase: true
  },

  restaurant_id: {
    type: String,
    required: [true,"Please Enter the ID"],
    unique:[true,"Duplicate ID Not Allowed"],
    trim: true,
    maxlength: 8,
    validate: function(value) {
        var idRegex = /^[0-9]{8}$/; // only accept 8 digits
        return idRegex.test(value);
      }
  },

});


const Restaurant = mongoose.model('Restaurant', RestaurantSchema,'Restaurants');
module.exports = Restaurant;