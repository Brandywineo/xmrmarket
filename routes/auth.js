const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  // Authentication logic will go here
  res.send('Login successful!');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  // Registration logic will go here
  res.send('Registration successful!');
});

module.exports = router;
