const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const homeroutes = require('./routes/home');

// Load Config
dotenv.config({path: './config/config.env'})

const app = express();

// Handlebars
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname:'.hbs'
}))
app.set('view engine', 'hbs')

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', homeroutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);