var passport = require('passport'); 
var passportVenmo = require('passport-venmo');
var User = require('../models/user'); 

var client_id = process.env.CLIENT_ID; 
var client_secret = process.env.CLIENT_SECRET; 

var venmoStrategy = passportVenmo.Strategy;

var venmo_strategy = new venmoStrategy(
    {
        'clientID': client_id, 
        'clientSecret': client_secret, 
        'callbackURL': "http://loanr.thenoobprogrammer.com/api/users/authenticate/callback"
    }, 
    function(accessToken, refreshToken, profile, next){
        User.findOrCreate({"username": profile.username, "venmoId": profile.id, 'access_token': accessToken}, function(err, user, created){
            user.save(function(err, user){
                return next(err, user);
            });
        });
    }
);

passport.use(venmo_strategy);

module.exports = passport; 