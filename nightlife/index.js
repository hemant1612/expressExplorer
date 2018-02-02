const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');
const fetch = require('node-fetch');
const favicon = require('serve-favicon');

const apiPath = "https://api.yelp.com/v3/businesses/search?categories=nightlife";

mongoose.connect("");
//mongoose.connect(process.env.MONGODB_URI);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));
db.once('open', () => console.log('connected'));

const authenticate = require('./authenticate');
const verify = require('./verify');
const Users = require('./models/users');

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(passport.initialize());

// render index.html
//app.use(express.static(path.join(__dirname, 'client', 'build')));
//app.use(favicon(path.join(__dirname, 'client', 'build', 'favicon.ico')));


app.post('/nightlife', (req,res) => {
  let { location, sortBy }  = req.body;
  let url = `${apiPath}&location=${location}&sort_by=${sortBy}`;
  fetch(url , {
    headers : {
      'Authorization' :PROCESS.env.API
    }
  }).then(data => data.json())
  .then(data => {console.log(data);res.json(data)})

})


// update user rsvp (authenticated user only)
app.put('/rsvps', verify.verifyUser, (req, res) => {
	let { username, rsvps } = req.body;
	Users.findOneAndUpdate({ username }, {rsvps}, (err, user) => {
		if(err) res.json({message: 'failed to update rsvps'})
		res.json({message: 'successfully updated rsvps'})
	})
})

app.get('/tt', (req,res) => {
  res.json({message : 'Hello wolrd'})
})



app.post('/account', (req, res, next) => {
	let { username, password, actionType } = req.body;
	switch(actionType){
		case 'signup':
			Users.register(new Users({username}), password, (err, user) => {
		    	if(err){
		    		return res.status(500).json({error: err.message});
		    	}
		    	user.save((err, user) => {
		    		passport.authenticate('local')(req, res, () => {
		    			let token = verify.getToken(user);

						res.status(200).json({
							message: 'Signup and login Successfully',
							success: true,
							token,
							userInfo: {username: user.username, rsvps: user.rsvps}
						});
		    		});
		    	});
		    });
			break;
		case 'login':
			passport.authenticate('local', (err, user, info) => {
				if(err){
					return next(err);
				}
				if(!user) {
					return res.status(401).json({
						error: 'Incorrect username or password'
					})
				}
				req.logIn(user, err => {
					if(err){
						return res.status(500).json({
							error: 'Could not log in user'
						});
					}
					// generate token
					let token = verify.getToken(user);

					res.status(200).json({
						message: 'Login Successfully',
						success: true,
						token,
						userInfo: {username: user.username, rsvps: user.rsvps}
					});
				});
			})(req, res, next);
			break;
		case 'logout':
			req.logout();
			res.status(200).json({
				message: 'Logout Successfully!'
			});
			break;
		default:
			res.json({error: 'unrecognized action'})
	}
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

app.listen(app.get('port'), () => {
	console.log(`app running on port ${app.get('port')}`);
});
