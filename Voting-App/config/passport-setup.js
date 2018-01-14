const key = require('./key');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const voter = require('../Model/user-model.js');

passport.serializeUser((user, done) => {
  //put it in cookie
  done(null, user.id);
});

//in cookie we have id
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(new GithubStrategy({
  clientID: key.github.clientID,
  clientSecret: key.github.clientSecret,
  callbackURL: "http://localhost:3000/auth/github/redirect"
}, (accessToken, refreshToken, profile, done) => {
  //console.log(profile.displayName,profile.id,profile.profileUrl);
  //  done(null,profile);
  voter.findOne({
    'id': profile.id
  }, (err, user) => {
    if (user) {
      done(null, user)
    } else {

      new voter({'id': profile.id, 'url': profile.profileUrl, 'name': profile.displayName}).save((user, err) => {
        if (err) 
          throw err;
        else
          console.log('saved');
        done(null, user)
      })
    }
  })

}))
