const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// @desc    Get Login page
// @route   GET /login

router.get('/', authController.getLogin)

// @desc    Auth with Google
// @route   GET /login/google

router.get('/google', authController.loginWithGoogle);

// @desc    Google Auth callback
// @route   GET /login/google/callback

router.get('/google/callback', authController.gAuthCallBack, authController.gAuthRedirect);

// @desc    Get Login page
// @route   GET /login/logout

router.get('/logout', authController.getLogout)

module.exports = router;