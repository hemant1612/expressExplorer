const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./key');
const User = require('../Model/user-model');

passport.serializeUser((user,done)=>{
  //put it in cookie
  done(null,user.id);
});


//in cookie we have id
passport.deserializeUser((id,done)=> {
  User.findById(id).then((user) => {
    done(null,user);
  });
});

passport.use(new GoogleStrategy({
  //options for GoogleStrategy
  callbackURL: '/auth/google/redirect',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  //callback function
  //console.log(profile);

  //check if user already exists in the db
  User.findOne({googleId: profile.id}).then((currentUser) => {
    if (currentUser) {
      //already user in the db
      done(null,currentUser);
    }
    else
    {
      new User({
        username: profile.displayName, googleId: profile.id}).save().then((newUser) => {
        console.log('new user created!')
        done(null,newUser);
      })
    }
  })
})

)
