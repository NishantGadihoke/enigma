var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var LocalStrategy = require('passport-local').Strategy;

var app = express();

//Make new databse
mongoose.connect("mongodb://nishant:nishant@ds115573.mlab.com:15573/enigma");
var db = mongoose.connection;
//If Mongo Error
db.on('error', console.error.bind(console, 'connection error'));

//Setting up sessions+cookies
app.use(session({
    secret: 'JagdishKumar',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
}));
app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// var Question = require('./models/question');

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//Setting up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Setting public directory
app.use(express.static(__dirname + '/public'));

//Setting view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//Setting routes
var routes = require('./routes/index');
app.use('/', routes);

//404
app.use((res, req, next) => {
  var err = new Error('File not found!');
  err.status = 404;
  next(err);
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//Listening
app.listen(8000, () => {
  console.log('Express running on Port 8000');
});
