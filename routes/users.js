const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('..models/user');

// Register page
router.get('/register', (req, res, next) => {
  res.send('regi');
});

// Profile page; authentication required
router.get('/profile', (req, res, next) => {
  res.send('profile');
});

// Validate page
router.get('/validate', (req, res, next) => {
  res.send('vali');
});

// Authenticate page
router.post('/authenticate', (req, res, next) => {
  res.send('auth');
});

// Register a new user
router.post('/register', (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to register user'
      });
    } else {
      res.json({
        success: true,
        msg: 'User is registered'
      });
    }
  });
});

module.exports = router;