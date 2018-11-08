
// This will be the prototype server for the imdbu model app 

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');


const config = require('./config'); // get our config file
const User = require('./models/user'); // get our mongoose model

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB --> replace with localhost / heroku info
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/database');

mongoose.connect(config.database); // connect to database

// /mongoose.connect(connectionString,{ useNewUrlParser: true });
  

mongodb://adam:password123@ds019806.mlab.com:19806/heroku_7n79k02g



// use morgan to log requests to the console
app.use(morgan('dev'));
apiRoutes.use(function(req, res, next) {

// check header or url parameters or post parameters for token
const token = req.body.token || req.query.token || req.headers['x-access-token'];

// decode token
if (token) {

  // verifies secret and checks exp
  jwt.verify(token, app.get('superSecret'), function (err, decoded) {
    if (err) {
      return res.json({ success: false, message: 'Failed to authenticate token.' });
    } else {
      // if everything is good, save to request for use in other routes
      req.decoded = decoded; next();
    }
  });

} else {

  // if there is no token
  // return an error
  return res.status(403).send({
    success: false,
    message: 'No token provided.'
  });

}
;
// app.get('/', function(req, res) {
// res.send('Hello! The API is at http://localhost:' + port + '/api')
// });

// API ROUTES -------------------
// we'll get to these in a second

app.get('/setup', function (req, res) {

  // create a sample user
  var nick = new User({
    name: 'Nick Cerminara',
    password: 'password',
    admin: true
  });

  // save the sample user
  nick.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

app.post('/authenticate', function (req, res) {

  // find the user
  User.findOne({
    name: req.body.name
  }, function (err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password
        const payload = {
          admin: user.admin
        };
        const token = jwt.sign(payload, 'iloveproject3', {
          expiresIn: '1440m'// expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }

  });
});


app.use('/api', apiRoutes);

// =======================
// start the server ======
// =======================
app.listen(PORT, function(){
  console.log('Magic happens at http://localhost:' + PORT);
});



}
)
