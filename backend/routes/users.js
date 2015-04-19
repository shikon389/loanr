var express = require('express');
var User = require('../models/user');
var Loan = require('../models/loan');
var request = require('request');
var passport = require('../configs/passport');
var router = express.Router();

router.get('/', function(req, res){
    return res.json({
        'status': true, 
        'message': "user route"
    });
});


/* User Autherization */
router.get('/authenticate', passport.authenticate('venmo', {scope: ['make_payments', 'access_balance', 'access_friends' ]}), function(req, res){
    if(!req.user){
        return res.json({
            'status': false
        });
    }
    return res.json({
        'status': true
    });
});

router.get('/:username', function(req, res){
    User.findOne({'username' : req.params.username}, function(err, user){
        if(err){
            return res.json({
                'status': false, 
                'error': err
            });
        }

        if(!user){
            return res.json({
                'status': false, 
                'message': "Couldn't find User"
            });
        }



        return res.json({
            'status': true, 
            'user': user
        });
    });
});

router.get('/:username/:loanID', function(req, res){
    User.findOne({'username' : req.params.username}, function(err, user){
        if(err){
            return res.json({
                'status': false, 
                'error': err
            });
        }

        if(!user){
            return res.json({
                'status': false, 
                'message': "Couldn't find loan"
            });
        }

        for(var i = 0; i < user.loans_given.length(); i++){
            if(user.loans_given[i] == 'loanID'){
                Loan.findOne({'_id' : req.params.loanID}, function(err, loan){
                    if(err){
                        return res.json({
                            'status': false, 
                            'error': err
                        });
                    }

                    return res.json({
                        'status': true, 
                        'loan': loan
                    });    
                });
            }
        }
    });
});

module.exports = router;