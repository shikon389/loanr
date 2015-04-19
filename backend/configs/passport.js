var passport = require('passport'); 
var passportVenmo = require('passport-venmo');
var User = require('../models/user'); 

var client_id = process.env.CLIENT_ID; 
var client_secret = process.env.CLIENT_SECRET; 
var callback_url = ""; 

var venmoStrategy = passportVenmo.Strategy;

var venmo_strategy = new VenmoStrategy(
    {
        'clientID': client_id, 
        'clientSecret': client_secret, 
        'callbackURL': "http://127.0.0.1/users/authenticate"
    }, 
    function(accessToken, refreshToken, profile, next){
        User.findOrCreate({"username": profile.username, "venmoId": profile.id}, function(err, user){
            return next(err, user); 
        });
    }
);

module.exports = passport; 