const express = require('express');
const userModel = require('../models/User');
const app = express();

// include fs module
var fs = require('fs'); 


/*  VIEW ALL RECORDS  */
//http://localhost:3000/users
app.get('/users', async (req, res) => {
  const users = await userModel.find();
  try {
    res.send(users);
    //const restaurants = await restaurantModel.find({})
    //res.json(restaurants)
  } catch (err) {
    res.status(500).send(err);
  }
});

/*  CREATE NEW RECORD  */
//http://localhost:3000/users
app.post('/users', async (req, res) => {
  
    const user = new userModel(req.body);
    
    try {
      await user.save((err) => {
        if(err){
          res.send(err)
        }else{
          res.send(user)
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
});

/* Sample JSON inputs for validation purposes */
// 1. EMPTY FIELDS
/*
{
    "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
            "lat": "",
            "lng": ""
        }
    },
    "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
    },
    "name": "",
    "username": "",
    "email": "",
    "phone": "",
    "website": "",
}
*/

// 2. WRONG FIELDS
/*
{
    "address": {
        "street": "Harujuku",
        "suite": "2",
        "city": "Tokyo Tokyo2",           // only alphabet and space
        "zipcode": "12345-12345",         // DDDDD-DDDD format
        "geo": {
            "lat": "35.652832",
            "lng": "139.839478"
        }
    },
    "company": {
        "name": "Gakuen Alice",
        "catchPhrase": "Best Friends Forever",
        "bs": "school"
    },
    "name": "Jes Muli",
    "username": "jes",                    // length >=4
    "email": "jes.com",                   // valid email address
    "phone": "1-12-123-12345",            // D-DDD-DDD-DDD format
    "website": "jessiemuli",              // http or https
}
*/

// 3. ALL CORRECT AND VALIDATED
/*
{
    "address": {
        "street": "Harujuku",
        "suite": "2",
        "city": "Tokyo Tokyo",
        "zipcode": "12345-1234",
        "geo": {
            "lat": "35.652832",
            "lng": "139.839478"
        }
    },
    "company": {
        "name": "Gakuen Alice",
        "catchPhrase": "Best Friends Forever",
        "bs": "school"
    },
    "name": "Jes Muli",
    "username": "jessmuli",
    "email": "jesm@yahoo.com",
    "phone": "1-123-123-123",
    "website": "http://jessiemuli.com",
}
*/

/*  ONE-TIME AUTO CREATE/INSERT DATABASE FROM JSON FILE  */
//http://localhost:3000/users/database/dumps
app.get('/users/database/dumps', async (req, res) => {
  try {
    fs.readFile('UsersData.json', (err, data) => {
      if(err) {
        res.send(err)
      } else {
        console.log(JSON.parse(data))
        userModel.create(JSON.parse(data))
      }
    })
    res.send(JSON.stringify({ status:true, message: "Record inserted"}))
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = app