const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    quantity:{
        type: Number,
        required: false
    },
    unit:{
        type: String,
        required: false,
        trim: true
    }
})

const MealSchema = new mongoose.Schema({
    mealName: {
        type: String,
        required: true,
        trim: true
    },

    ingredient: {
        type: [ingredientSchema],
        required: false
    },

    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    /*
    sessionID:{
        type: String,
        required: true,
    }*/
})

module.exports = mongoose.model('Meal', MealSchema);