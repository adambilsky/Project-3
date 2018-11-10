// This will be the prototype server for the imdbu model app 

const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./passport');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const userRoute = require('./routes/user');




// Define middleware here
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(
  session({
  secret: 'thisisoursecret', //pick a random string to make the hash that is generated secure
  resave: false, //required
  saveUninitialized: false //required
  })
);

app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser
// Add routes, both API and view
app.use(routes);
app.use(userRoute);

// Authentication
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  next()
});

app.post('/user', (req, res) => {
  console.log('user signup');
  req.session.username = req.body.username;
  res.end()
});





// End auth

// Connect to the Mongo DB --> replace with localhost / heroku info
mongoose.connect(process.env.MONGODB_URI ||"mongodb://will:password123@ds019806.mlab.com:19806/heroku_7n79k02g");
// "mongodb://localhost/imdbu"
// "mongodb://will:password123@ds019806.mlab.com:19806/heroku_7n79k02g"
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
