const Meal = require('../models/Meal').MealSchemaExport;

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
        const ing1 = {};
        ing1.name = 'IngTest1';
        ing1.quantity = 5;
        ing1.unit = 'IngQty1';
        const ing2 = {};
        ing2.name = 'IngTest2';
        ing2.quantity = 7;
        ing2.unit = 'IngQty2';
        req.body.user=req.user.id;
        req.body.ingredient = [ing1, ing2]
        console.log(req.body)
        // Add story to db using defined stories schema
        await Meal.create(req.body);
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