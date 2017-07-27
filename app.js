const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');


// Connect to mongoDB
const config = require('./config/database');
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database ', config.database);
});

const app = express();
const port = process.env.PORT || 8080;

// Routes path
const users = require('./routes/users');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


// Routes
app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/users', users);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
app.listen(port, () => {
  console.log('Server started on port ', port);
});