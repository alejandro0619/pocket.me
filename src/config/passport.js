const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { userModel } = require('../models/index');
passport.use(new LocalStrategy({
    usernameField: 'email'
  }, async (email, password, done) => {
    // Match Email's User
    const user = await userModel.findOne({email: email});
    if (!user) {
      return done(null, false, { message: 'usuario no encontrado' });
    } else {
      // Match Password's User
      const match = await user.matchPassword(password);
      if(match) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
    }
  }));

passport.serializeUser((user, done)=>{
    done(null, user.id)
});

passport.deserializeUser((id, done)=>{
    userModel.findById(id, (err, user)=>{
        done(err, user);
    });
    
});