const express = require('express');
const restaurantModel = require('../models/Restaurants');
const app = express();


//1. Select ALL restaurant columns
//http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) => {
  const restaurants = await restaurantModel.find();
  try {
    res.send(restaurants);
    //const restaurants = await restaurantModel.find({})
    //res.json(restaurants)
  } catch (err) {
    res.status(500).send(err);
  }
});


//2. Select ALL columns by cuisine
//http://localhost:3000/restaurants/cuisine/Japanese
//http://localhost:3000/restaurants/cuisine/Bakery
//http://localhost:3000/restaurants/cuisine/Italian
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  const cuisine = req.params.cuisine
  const restaurant = await restaurantModel.find({cuisine : cuisine});
  try {
    if(restaurant.length != 0){
      res.send(restaurant);
    }else{
      res.send(JSON.stringify({status:false, message: "No data found"}))
    }
  const restaurants = await restaurantModel.find()
            //.select("_id city name")
            .where('cuisine').equals()
            .sort({'_id' : 'desc'});  
            res.json(restaurants)
  } catch (err) {
    res.status(500).send(err);
  }
});


/* 3.
Create REST API and return:
-The selected columns must include id, cuisines, name, city, resturant_id
-Sort by the restaurant_id in Ascending or Descending Order based on parameter passed
> http://localhost:3000/restaurants?sortBy=ASC
> http://localhost:3000/restaurants?sortBy=DESC
*/
app.get('/restaurants/', async (req, res) => {

  if(Object.keys(req.query).length != 1){
    res.send(JSON.stringify({status:false, message: "Insufficient query parameter"}))
  } else{
    const sortBy = req.query.value
    const restaurants = await restaurantModel.find({})
          .select("_id cuisine name city restaurant_id")
          .sort({"restaurant_id":sortBy});
  }

  try {
      if(restaurants.length != 0){
        res.send(restaurants);
      } else{
        res.send(JSON.stringify({status:false, message: "No data found"}))
      }
  } catch (err) {
      res.status(500).send(err);
  }
});


/* 4. 
Create REST API to return restaurants details where:
-All cuisines are equal to Delicatessen and the city is not equal to Brooklyn
-The selected columns must include cuisines, name and city, but exclude id
-The sorting order must be Ascending Order on the name
> http://localhost:3000/restaurants/Delicatessen
*/

app.get('/restaurants/Delicatessen', async (req, res) => {
  const restaurants = await restaurantModel.find()
    .select("cuisine city name")
    .where('city').ne('Brooklyn')
    .where('cuisine').equals('Delicatessen')
    .sort({'name' : 'asc'});  
    res.json(restaurants)
  res.send(restaurants);
});

module.exports = app