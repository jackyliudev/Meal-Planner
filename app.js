// Express Library Imports
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const passport = require('passport');

// Local Imports
const passportConfig = require('./config/passport');
const connectDB = require('./config/db');

// Route Imports
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');


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

// Passport middleware
//app.use(passport.initialize());
//app.use(passport.session());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', homeRoutes);
app.use('/login', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);