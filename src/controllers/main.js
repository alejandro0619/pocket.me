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
        req.flash( 'succes msg','Note added sucessfully');
        res.redirect('/notes');
    },

    async renderNotes(req, res) { // * Render all notes:
        const notesArray = await noteModel.find();
        res.render('NoteView/note-list', { notesArray });
    },

    async editForm(req, res) { // * Edit notes:
        let { id } = req.params;
        let note = await noteModel.findById(id);
        res.render('NoteView/edit-note', { note: note });
    },

    async updateNotes(req, res) { // * route to receive edited notes:
        let { id } = req.params;
        let { title, note } = req.body;
       await noteModel.findByIdAndUpdate(id, { title: title, note: note});
       req.flash('success msg', 'notes updated successfully');
        res.redirect('/notes');
    },

    async deleteNote(req, res) { // * delete notes:
        let { id } = req.params;
        await noteModel.findByIdAndDelete(id);
        req.flash('success msg', 'notes deleted successfully');
        res.redirect('/notes');
    }
    // ! Todo list functionalities:

    // ! User functionalities:

    // ! links functionalities:

};
module.exports = controllers;