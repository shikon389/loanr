var express = require('express');
var User = require('../models/user');
var Loan = require('../models/loan');

var router = express.Router();

router.get('/', function(req, res){
    return res.json({
        'status': true, 
        'message': "user route"
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


module.exports = router;