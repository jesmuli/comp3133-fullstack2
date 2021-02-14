const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UsersRoutes.js');

var bodyParser = require('body-parser')
const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('<!--CONNECTION STRING IS REPLACED FOR PRIVACY REASONS-->', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });