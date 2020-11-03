//! Importing modules:
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const routes = require('../routes/index');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');


module.exports = app =>{
    require('../config/passport');
    // Settings:
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    // Middlewares:
    app.use(morgan('dev'));   
    app.use(express.urlencoded({ extended: false}));
    app.use(express.json());
    app.use(methodOverride('_method'));
    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());


    //Routes:
    app.use(routes);

    // static files:
    app.use('/public',express.static(path.join(__dirname, '../public')));

    return app;
}

