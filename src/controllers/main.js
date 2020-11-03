const { noteModel } = require('../models/');

const controllers = {
    // ! Home controller:
    getHome(req, res) {
        res.render('index');
    },

    // !Login funcionalities:
    signIn(req, res) {
        res.send('works 1');
    },
    signUp(req, res) {
        res.send('works 2');
    },

    // ! Notes functionalities:
    addNotes(req, res) { // * Notes Form:
        res.render('NoteView/new-note');

    },

    async createNotes(req, res) { // * route to receive Notes Form:
        const { title, note } = req.body;
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
        res.render('NoteView/note-list', { notesArray });
    },

    editForm(req, res) { // * Edit notes:
        res.render('NoteView/edit-note');
    },

    updateNotes(req, res) { // * route to receive edited notes:

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