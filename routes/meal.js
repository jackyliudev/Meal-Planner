const express = require('express');
const router = express.Router();
const mealController = require('../controllers/meal');

const authMiddleware = require('../middleware/auth');

// @desc    Login/Landing page
// @route   GET /meals

router.get('/', authMiddleware.checkAuth, mealController.getIndex)

module.exports = router;