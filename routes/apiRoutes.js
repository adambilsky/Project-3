// API ROUTES -------------------
var express = require('express');
var User   = require('../models/user');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
// get an instance of the router for api routes
var router = express.Router(); 

// TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

// API ROUTES -------------------

// get an instance of the router for api routes


// route to authenticate a user (POST http://localhost:8080/api/authenticate)



// TODO: route middleware to verify a token

// route to show a random message (GET http://localhost:8080/api/)
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
router.get('/users', function(req, res) {
  

  User.find({}, function(err, users) {
    res.json(users);
  });
}); 
// apply the routes to our application with the prefix /api


module.exports = router;