const controllers = {
    getHome(req, res) {
        res.render('index')
    },
    signIn(req, res){
        res.send('works 1')
    },
    signUp(req, res){
        res.send('works 2')
    }
};
module.exports = controllers;