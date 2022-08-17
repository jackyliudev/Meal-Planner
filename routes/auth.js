const express = require('express');
//const passport = require('passport');
const router = express.Router();
const authController = require('../controller/auth');

// @desc    Login page router
// @route   GET /login

router.get('/', authController.getLogin)

module.exports = router;