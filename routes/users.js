const express = require('express');
const router = express.Router();

// Register page
router.get('/register', (req, res, next) => {
  res.send('regi');
})

// Profile page; authentication required
router.get('/profile', (req, res, next) => {
  res.send('profile');
})

// Validate page
router.get('/validate', (req, res, next) => {
  res.send('vali');
})

// Authenticate page
router.post('/authenticate', (req, res, next) => {
  res.send('auth');
})

module.exports = router;