const express = require('express');
const route = express.Router();
const { getHome, signIn, signUp, addNotes, createNotes, renderNotes, editForm, updateNotes, deleteNote }
 = require('../controllers/main');

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

route.get('/',getHome );
route.get('/signin', signIn);
route.get('/signup', signUp);
route.get('/notes/add',addNotes);
route.post('/notes/add-note', createNotes);
route.get('/notes', renderNotes);
route.get('/notes/edit/:id', editForm);
route.put('/notes/edit/:id', updateNotes);
route.delete('/notes/delete/:id', deleteNote);

module.exports = route;