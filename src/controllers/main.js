const passport = require('passport');

const {
    noteModel,
    userModel
} = require('../models/');

const controllers = {
    // ! Home controller:
    getHome(req, res) {
        res.render('index');
    },

    // !Login funcionalities:
    renderSignIn(req, res) {
        res.render('UserView/signin');
    },
    renderSignUp(req, res) {
        res.render('UserView/signup');
    },
    signin : passport.authenticate('local',{
        failureRedirect: '/signin',
        successRedirect: '/notes',
    }),
    async signup(req, res) {
        let {name, email, password} = req.body;
        let emailUser = await userModel.findOne({email: email});
        if(emailUser){
            res.send('Correo ya está en uso');

        } else{
            const newUser = new userModel({
                name: name,
                email: email,
                password: password
            });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.redirect('/notes');
        };


    },
    logOut(req, res) {
        req.logOut();
        res.redirect('/signin');
    },

    // ! Notes functionalities:
    addNotes(req, res) { // * Notes Form:
        res.render('NoteView/new-note');

    },

    async createNotes(req, res) { // * route to receive Notes Form:
        const {
            title,
            note
        } = req.body;
        let { _id } = req.user;
        // * Save the notes in mongodb
        const newNote = new noteModel({
            title: title,
            note: note,
            user: _id,
        });
        await newNote.save();
        res.redirect('/notes');
    },

    async renderNotes(req, res) { // * Render all notes:
        const notesArray = await noteModel.find({
            user: req.user._id
        }).sort({createdAt: 'desc'});
        let nickname =  req.user.name;
        console.log(nickname)
        res.render('NoteView/note-list', {
            notesArray,
            nickname
        });
    },

    async editForm(req, res) { // * Edit notes:
        let { id } = req.params;
        let note = await noteModel.findById(id);
        if(note.user != req.user._id){
            res.redirect('/notes')
        } else{
            res.render('NoteView/edit-note', {
                note: note
            });
        }
    },

    async updateNotes(req, res) { // * route to receive edited notes:
        let { id } = req.params;
        let {
            title,
            note
        } = req.body;

        await noteModel.findByIdAndUpdate(id, {
            title: title,
            note: note
        });
        res.redirect('/notes');
    },

    async deleteNote(req, res) { // * delete notes:
        let { id } = req.params;
        await noteModel.findByIdAndDelete(id);
        res.redirect('/notes');
    }
    // ! Todo list functionalities:

    // ! User functionalities:

    // ! links functionalities:

};

module.exports = controllers;