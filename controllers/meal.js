const Meal = require('../models/Meal').MealSchemaExport;
const ingredient = require('../models/Meal').IngredientSchemaExport;

// Controls meals index view
function getIndex(req,res){
    res.render('mealindex', {
        loginStatus: res.locals.dashVal,
        name: res.locals.name
    })
}

// Create new meal in database
async function addMeal(req,res){
    try{
        req.body.user=req.user.id;
        console.log(req.body)
        // Add story to db using defined stories schema
        //await Meal.create(req.body);
        res.redirect('/');
    }
    catch(err){
        console.error(err);
        res.render('error/500');
    }
}

// Render Add Meal Form View
function getAddMealForm(req,res){
    res.render('meals/add', {
        loginStatus: res.locals.dashVal,
        name: res.locals.name
    })
}

module.exports = {getIndex, 
                addMeal,
                getAddMealForm};