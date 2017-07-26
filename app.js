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
const port = process.env.PORT || 3000;

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const users = require('./routes/users');
app.use('/users', users);

// Middleware
app.use(cors());

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('hello');
});

// Start server
app.listen(port, () => {
  console.log('Server started on port ', port);
});