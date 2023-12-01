const express = require('express');
const app = express();

// Import modules
require('dotenv').config({path:'./config/app.env'})
require('colors');
require('express-async-errors');
// Configurations
const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE || 'production';
const HOST = process.env.HOST || '127.0.0.1'
// Template-engine Configuration 
const{ engine } = require('express-handlebars');
app.engine('hbs', engine({
    extname:'.hbs',
    runtimeOptions:{
        allowProtoPropertiesByDefault:true
    }
}));
app.set('view engine', 'hbs');
// app.set('views', './templates');
// Connect to DB 
require('./config/db')()

// Parse form data 
app.use(express.urlencoded({extended:false}))
// Routes 
app.use('/', require('./routes/task'))



app.listen(PORT, console.log(`Server running on ${MODE} mode at http://${HOST}:${PORT}`.green.underline))