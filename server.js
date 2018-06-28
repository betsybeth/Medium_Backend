//  Setup Nodemon to enable automatical start server when file change

const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./app/Models/User');
const app = express()


// Connect to mongoDB
mongoose.connect('mongodb://localhost/mediumDb3', (err) => {
 if (err) throw err;
 console.log('successfully connected');
} );



