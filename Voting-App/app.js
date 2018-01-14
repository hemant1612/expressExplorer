var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var passport = require('passport');
var cookieSession = require('cookie-session');

const passportSetup = require('./config/passport-setup');
var keys = require('./config/key');
var index = require('./routes/index');
var vote = require('./routes/vote');
var auth = require('./routes/auth');
var user = require('./routes/user');



var app = express();
//app.set('trust proxy', 1)
// view engine setup

app.engine('.hbs', exphbs({ defaultLayout: 'main',extname : '.hbs' }));
app.set('view engine', '.hbs');

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:[keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost/', { useMongoClient: true } , ()=>{
  console.log('connected to mongoose');
});


app.use('/user',user);
app.use('/auth',auth);
app.use('/vote', vote);
app.use('/', index);


// error handler
app.listen(3000);
