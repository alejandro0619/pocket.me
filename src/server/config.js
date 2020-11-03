//! Importing modules:
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const routes = require('../routes/index');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

module.exports = app =>{
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
    app.use(flash());

    // Global variables:
    app.use((req ,res, next)=>{
        res.locals.success_msg = req.flash('success msg');
        next();
    });

    //Routes:
    app.use(routes);

    // static files:
    app.use('/public',express.static(path.join(__dirname, '../public')));

    return app;
}

