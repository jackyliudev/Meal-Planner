const express = require('express');
const router = express.Router();
const mealController = require('../controllers/meal');

const authMiddleware = require('../middleware/auth');

// @desc    Login/Landing page
// @route   GET /meals
router.get('/', authMiddleware.checkAuth, mealController.getIndex);


// @desc    Process Add Form
// @route   POST /meals
router.post('/', mealController.addMeal);

// @desc    Process add form
// @route   GET /meals/add
router.get('/add', authMiddleware.checkAuth, mealController.getAddMealForm);



module.exports = router;