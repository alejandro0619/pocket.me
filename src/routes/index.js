const express = require('express');
const route = express.Router();
const passport = require('passport')
const {
    getHome,
    renderSignIn,
    renderSignUp,
    addNotes,
    createNotes,
    renderNotes,
    editForm,
    updateNotes,
    deleteNote,
    signup,
    signin,
    logOut
} = require('../controllers/main');

function authenticated(req, res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/')
}

/*
! Home route>
! signin>
! signup>
! add notes form>  
! send add notes form>
! get all notes>
! edit notes form>
! send edit notes form>
*/

route.get('/', getHome);
route.get('/signin', renderSignIn);
route.post('/signin', signin);
route.get('/signup', renderSignUp);
route.post('/signup', signup);
route.get('/notes/add', authenticated,addNotes);
route.post('/notes/add-note', createNotes);
route.get('/notes',authenticated,renderNotes);
route.get('/notes/edit/:id', editForm);
route.put('/notes/edit/:id', updateNotes);
route.delete('/notes/delete/:id', deleteNote);
route.get('/logout',authenticated, logOut)

module.exports = route;