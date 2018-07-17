//  Setup Nodemon to enable automatical start server when file change

const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


app.use(bodyParser.json());

app.use(require('./app/Routes/routes'));
// Connect to mongoDB
mongoose.connect('mongodb://localhost/mediumDb3', (err) => {
    if (err) throw err;
    console.log('successfully connected');
} );
// listening to requests
app.listen(3000, () => {
    console.log('listen to request');
});


