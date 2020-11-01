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
    addNotes(req, res){
        res.render('NoteView/new-note');
    },
    createNotes(req, res){
        
    },
    renderNotes(req, res){
        res.send('render notes')
    },
    editForm(req, res){
        res.send('render form');
    },
    updateNotes(req, res){

    },
    deleteNote(req, res){

    }
    // ! Todo list functionalities:

    // ! User functionalities:

    // ! links functionalities:

};
module.exports = controllers;