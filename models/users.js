const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../models/database');


// User schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  }, 

  email: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  const query = {username: username};
  User.findOne(query, callback);
};

