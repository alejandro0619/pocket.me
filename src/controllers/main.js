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
    signin(req, res) {
        
    },
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
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save();
            res.redirect('/notes');
        };


    },
    logOut(req, res) {
        res.send('LogOut');
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

        // * Save the notes in mongodb
        const newNote = new noteModel({
            title: title,
            note: note
        });
        await newNote.save();
        res.redirect('/notes');
    },

    async renderNotes(req, res) { // * Render all notes:
        const notesArray = await noteModel.find();
        res.render('NoteView/note-list', {
            notesArray
        });
    },

    async editForm(req, res) { // * Edit notes:
        let { id } = req.params;

        let note = await noteModel.findById(id);
        res.render('NoteView/edit-note', {
            note: note
        });
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