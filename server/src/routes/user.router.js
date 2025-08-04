const express = require('express');
const router = express.Router();
const { login, signup, dashboard, leaderboard } = require('../controllers/userController.js');

router.post('/login', login);
router.post('/signup', signup);
router.get('/dashboard', dashboard);
router.get('/leaderboard', leaderboard);

module.exports = router;