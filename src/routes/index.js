const express = require('express');
const route = express.Router();
const { getHome, signIn, signUp } = require('../controllers/main');

route.get('/',getHome );

route.get('/signin', signIn);
route.get('/signup', signUp)

module.exports = route;