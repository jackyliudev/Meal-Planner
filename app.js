// Express Library Imports
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session= require('express-session');
const MongoStore = require('connect-mongo');

// Local Imports
const passportConfig = require('./config/passport');
const connectDB = require('./config/db');

// Route Imports
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const mealRoutes = require('./routes/meal');

// Load Config
dotenv.config({path: './config/config.env'})

// Passport Config
passportConfig(passport);

// Connect to Database
connectDB();

// Create express instance
const app = express();

// Handlebars
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname:'.hbs'
}))
app.set('view engine', 'hbs')

// Sessions
app.use(session({
    secret: 'tidy cats',
    resave: false,
    cookie: {maxAge: 604800000}, // 604800000 is 7days*24hr*60min*60s*1000ms
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI})
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', homeRoutes);
app.use('/login', authRoutes);
app.use('/meals', mealRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);