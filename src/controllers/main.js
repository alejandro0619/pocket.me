const controllers = {
    // ! Home controller:
    getHome(req, res) {
        res.render('index')
    },
    // !Login funcionalities:
    signIn(req, res){
        res.send('works 1')
    },
    signUp(req, res){
        res.send('works 2')
    },
    // ! Notes functionalities:
    addNotes(req, res){ // * Notes Form:
        res.render('NoteView/new-note');

    },
    createNotes(req, res){ // * route to receive Notes Form:
        console.log(req.body)
        res.send('Recibido')
    },
    renderNotes(req, res){ // * Render all notes:
        res.send('render notes')
    },
    editForm(req, res){ // * Edit notes:
        res.send('render form');
    },
    updateNotes(req, res){ // * route to receive edited notes:

    },
    deleteNote(req, res){ // * delete notes:

    }
    // ! Todo list functionalities:

    // ! User functionalities:

    // ! links functionalities:

};
module.exports = controllers;