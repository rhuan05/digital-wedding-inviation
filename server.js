require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

//
app.use(express.static(path.join(__dirname, '/public')));

//
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(routes);

// View engine(ejs)
app.set('view engine', 'ejs');

//Connection with database
mongoose.connect(process.env.DATABASE_URL, () => {
    console.log('Database is running🔥');
});

//Create server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running🔥');
});